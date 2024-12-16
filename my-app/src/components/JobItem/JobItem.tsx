import React from "react";
import {
  StyledWrapper,
  StyledWrapperDetails,
  StyledWrapperLogo,
  StyledWrapperCompanyInfo,
  StyledWrapperTechnology,
  CompanyName,
  StatusNew,
  StatusFeatured,
} from "./JobItem.styles.js";
import { FC } from "react";
import { JobDataInterface } from "../../interface/JobDataInterface.js";

export const JobItem: FC<JobDataInterface> = ({
  id,
  logo,
  newStatus,
  featured,
  company,
  position,
  postedAt,
  contract,
  location,
  role,
  level,
  languages,
  tools,
}) => {
  const jobDetails: Array<string> = [postedAt, contract, location];
  const jobAttributes: Array<string> = [role, level, ...languages, ...tools];

  return (
    <StyledWrapper>
      <StyledWrapperDetails>
        <StyledWrapperLogo>
          <img src={logo} alt={`${company} logo`} />
        </StyledWrapperLogo>
        <StyledWrapperCompanyInfo>
          <CompanyName>{company}</CompanyName>
          {newStatus && <StatusNew>NEW!</StatusNew>}
          {featured && <StatusFeatured>FEATURED</StatusFeatured>}
          <p>{position}</p>
          <ul>
            {jobDetails.map((detail: string) => (
              <li key={id}>{detail}</li>
            ))}
          </ul>
        </StyledWrapperCompanyInfo>
      </StyledWrapperDetails>
      <StyledWrapperTechnology>
        <ul>
          {jobAttributes.map((attribute: string) => (
            <li key={id}>{attribute}</li>
          ))}
        </ul>
      </StyledWrapperTechnology>
    </StyledWrapper>
  );
};

export default JobItem;
