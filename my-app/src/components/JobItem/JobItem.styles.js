import styled from 'styled-components';

export const StyledWrapper = styled.div `
  display: flex;
  justify-content: space-between;
  padding: 40px;
  border-radius: 10px;
  background-color: #f3f5f5;
  box-shadow: 0 15px 20px rgba(76, 156, 147, 0.15);
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    margin-bottom: 10%;
  }

  @media (max-width: 900px) {
    display: block;
  }
`;

export const StyledWrapperDetails = styled.div `
  display: flex;

  @media (max-width: 1200px) {
    display: block;
  }
`;

export const StyledWrapperLogo = styled.div `
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 1200px) {
    margin-top: -20%;
    width: 60px;
    height: 60px;
  }

  @media (max-width: 1200px) {
    margin-top: -10%;
  }

  @media (max-width: 600px) {
    margin-top: -15%;
  }
`;

export const StyledWrapperCompanyInfo = styled.div `
  padding-left: 40px;

  ul {
    padding: 0;
    margin: 0;
    display: flex;
  }


  li {
    margin: 0 20px;
    color: #969696;
    font-weight: 400;
    padding-left: 10px;
    list-style-type: disc;
    &:first-child {
      list-style-type: none;
      padding-left: 0;
      margin-left: 0;
    }
  }

  p {
    font-weight: 700;
    font-size: 24px;
    padding: 10px 0;
    transition: all 0.3s ease-out;
    &:hover{
      color: #4c9c93;
      cursor: pointer;
    }
  }

  @media (max-width: 900px) {
    padding-bottom: 1rem;
    p {
      font-size: 16px;
    }
    li {
      font-size: 12px;
    }
    }
`;

export const CompanyName = styled.span `
  margin-right: 10px;
  color: #4c9c93;
  font-weight: 600;

  @media (max-width: 900px) {
    font-size: 12px;
  }
`;

export const StatusNew = styled.span `
  margin-right: 10px;
  background-color: #4c9c93;
  color: #f3f5f5;
  font-weight: 600;
  border-radius: 15px;
  padding: 5px 10px;
  font-size: 14px;

  @media (max-width: 900px) {
    font-size: 12px;
    padding: 2px 5px;
    font-weight: 500;
  }
`;

export const StatusFeatured = styled.span `
  margin-right: 10px;
  background-color: black;
  color: #f3f5f5;
  font-weight: 600;
  border-radius: 15px;
  padding: 5px 10px;
  font-size: 14px;

  @media (max-width: 900px) {
    font-size: 12px;
    padding: 2px 5px;
    font-weight: 500;
  }
`;

export const StyledWrapperTechnology = styled.div `
  display: flex;
  align-items: center;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }

  li {
    margin: 2px;
    margin-right: 20px;
    background-color: #c4dedb;
    color: #4c9c93;
    padding: 7px;
    border-radius: 5px;
    font-weight: 500;
    transition: all 0.3s ease-out;
    &:hover{
      color: #f3f5f5;
      background-color: #4c9c93;
      cursor: pointer;
    }
  }

  @media (max-width: 900px) {
    padding-top: 1rem;
    border-top: 2px solid #969696;

    li {
      font-size: 14px;
    }
  }
`;