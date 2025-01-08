import { FC } from "react";
import {
  StyledWrapperSelect,
  StyledWrapperResult,
  ResultItem,
  ButtonClear,
} from "./JobBoard.styles.js";
import { JobItem } from "../components/JobItem/JobItem.tsx";
import React from "react";
import { JobDataInterface } from "../interface/JobDataInterface.js";
import { SelectChangeEvent } from "@mui/material/Select";
import { SelectElement } from "../components/SelectElement/Select.tsx";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSelected,
  removeSelectedItem,
  clearAllSelected,
} from "../store/filters.ts";
import { RootState } from "../store/store.ts";

const JobBoard: FC = () => {
  const { jobData, isLoading, isError } = useSelector(
    (state: RootState) => state.data
  );
  const dispatch = useDispatch();
  const selected = useSelector((state: RootState) => state.filters);

  const getUniqueValues = (name: string): string[] => {
    const values = jobData.flatMap((item) => item[name]);
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
      dispatch(
        updateSelected({
          category,
          values: typeof value === "string" ? value.split(",") : value,
        })
      );
    };

  const selectData = {
    roles: {
      name: "Role",
      options: allOptions.roles,
      selectedValues: selected.roles,
      handleChange: handleChange("roles"),
      type: "roles",
    },
    levels: {
      name: "Level",
      options: allOptions.levels,
      selectedValues: selected.levels,
      handleChange: handleChange("levels"),
      type: "levels",
    },
    technologies: {
      name: "Technology",
      options: allOptions.languagesAndTools,
      selectedValues: selected.languagesAndTools,
      handleChange: handleChange("languagesAndTools"),
      type: "languagesAndTools",
    },
  };

  const allSelected = Object.values(selectData).flatMap((jobData) =>
    jobData.selectedValues.map((value) => ({ type: jobData.type, value }))
  );

  const handleClearAllItems = () => {
    dispatch(clearAllSelected());
  };

  const handleRemoveItem = (category: keyof typeof selected, value: string) => {
    dispatch(removeSelectedItem({ category, value }));
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

  const filteredData = jobData.filter(matchesFilters);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data.</p>;

  return (
    <div>
      <Title>Job Board</Title>
      <StyledWrapperSelect>
        {Object.entries(selectData).map(([key, jobData]) => (
          <SelectElement
            key={key}
            name={jobData.name}
            options={jobData.options}
            selectedValues={jobData.selectedValues}
            handleChange={jobData.handleChange}
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
                    item.type as keyof typeof selected,
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
      <Footer>Job listings filter</Footer>
    </div>
  );
};

export default JobBoard;
