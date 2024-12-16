import { FC, useState } from "react";
import {
  StyledWrapperSelect,
  StyledWrapperResult,
  ResultItem,
  ButtonClear,
} from "./JobBoard.styles.js";
import { JobItem } from "../components/JobItem/JobItem.tsx";
import React from "react";
import data from "../data/data.json";
import { JobDataInterface } from "../interface/JobDataInterface.js";
import { SelectChangeEvent } from "@mui/material/Select";
import { SelectElement } from "../components/SelectElement/Select.tsx";

const JobBoard: FC = () => {
  const [selected, setSelected] = useState({
    roles: [] as string[],
    levels: [] as string[],
    languagesAndTools: [] as string[],
  });

  const getUniqueValues = (name: string): string[] => {
    const values = data.flatMap((item) => item[name]);
    return [...new Set(values)];
  };

  const allOptions = {
    roles: getUniqueValues("role"),
    levels: getUniqueValues("level"),
    languagesAndTools: [
      ...getUniqueValues("languages"),
      ...getUniqueValues("tools"),
    ],
  };

  const handleChange =
    (category: keyof typeof selected) =>
    (event: SelectChangeEvent<string[]>) => {
      const {
        target: { value },
      } = event;
      setSelected((prevState) => ({
        ...prevState,
        [category]: typeof value === "string" ? value.split(",") : value,
      }));
    };

  const selectData = {
    roles: {
      name: "Role",
      options: allOptions.roles,
      selectedValues: selected.roles,
      handleChange: handleChange("roles"),
      type: "role",
    },
    levels: {
      name: "Level",
      options: allOptions.levels,
      selectedValues: selected.levels,
      handleChange: handleChange("levels"),
      type: "level",
    },
    technologies: {
      name: "Technology",
      options: allOptions.languagesAndTools,
      selectedValues: selected.languagesAndTools,
      handleChange: handleChange("languagesAndTools"),
      type: "technology",
    },
  };

  const allSelected = Object.values(selectData).flatMap((data) =>
    data.selectedValues.map((value) => ({ type: data.type, value }))
  );

  const handleClearAllItems = () => {
    setSelected({
      roles: [],
      levels: [],
      languagesAndTools: [],
    });
  };

  const handleRemoveItem = (category: keyof typeof selected, value: string) => {
    setSelected((prevState) => ({
      ...prevState,
      [category]: prevState[category].filter((item) => item !== value),
    }));
  };

  const matchesFilters = (job: JobDataInterface) => {
    const filters = {
      role: selected.roles.length === 0 || selected.roles.includes(job.role),
      level:
        selected.levels.length === 0 || selected.levels.includes(job.level),
      languagesAndTools:
        selected.languagesAndTools.length === 0 ||
        selected.languagesAndTools.some((tech) =>
          job.languages.concat(job.tools).includes(tech)
        ),
    };

    return Object.values(filters).every((match) => match);
  };

  const filteredData = data.filter(matchesFilters);

  return (
    <div>
      <StyledWrapperSelect>
        {Object.entries(selectData).map(([key, data]) => (
          <SelectElement
            key={key}
            name={data.name}
            options={data.options}
            selectedValues={data.selectedValues}
            handleChange={data.handleChange}
          />
        ))}
      </StyledWrapperSelect>
      <StyledWrapperResult>
        <div>
          {allSelected.map((item, index) => (
            <ResultItem key={index}>
              <p>{item.value}</p>
              <button
                onClick={() =>
                  handleRemoveItem(
                    item.type === "role"
                      ? "roles"
                      : item.type === "level"
                      ? "levels"
                      : "languagesAndTools",
                    item.value
                  )
                }
              >
                X
              </button>
            </ResultItem>
          ))}
        </div>
        <ButtonClear onClick={handleClearAllItems}>Clear</ButtonClear>
      </StyledWrapperResult>
      <div>
        <ul style={{ listStyleType: "none" }}>
          {filteredData.map((item: JobDataInterface) => (
            <li key={item.id}>
              <JobItem
                id={item.id}
                logo={`${process.env.PUBLIC_URL}${item.logo}`}
                company={item.company}
                newStatus={item.newStatus}
                featured={item.featured}
                position={item.position}
                postedAt={item.postedAt}
                contract={item.contract}
                location={item.location}
                role={item.role}
                level={item.level}
                languages={item.languages}
                tools={item.tools}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobBoard;
