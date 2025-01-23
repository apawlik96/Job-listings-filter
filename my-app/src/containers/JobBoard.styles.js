import styled from 'styled-components';

export const StyledWrapperSelect = styled.div `
  display: flex;
  flex-wrap: wrap;
  padding: 40px;
  border-radius: 10px;
  background-color: #f3f5f5;
  box-shadow: 0 15px 20px rgba(76, 156, 147, 0.15);
  margin-bottom: 2rem;
`;

export const StyledWrapperResult = styled.div `
  display: flex;
  justify-content: space-between;
  padding: 40px;
  border-radius: 10px;
  background-color: #f3f5f5;
  box-shadow: 0 15px 20px rgba(76, 156, 147, 0.15);
  margin-bottom: 5rem;

  div {
    display: flex;
    flex-wrap: wrap;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 20px;
  }

  @media (max-width: 900px) {
    font-size: 14px;
  }
`;

export const ResultItem = styled.div `
    display:flex;
    text-align: center;

    p{
        background-color: #c4dedb;
        color: #4c9c93;
        padding: 7px;
        font-weight: 500;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    button {
        border: none;
        background-color: #4c9c93;
        color: #c4dedb;
        padding: 7px;
        font-weight: 500;
        font-size: 1.2rem;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        transition: all 0.3s ease-out;
        &:hover{
            background-color: black;
            color: #f1f1f1;
            cursor: pointer;
        }
        @media (max-width: 900px) {
          font-size: 14px;
        }
    }
`;

export const ButtonClear = styled.button `
    border: 2px solid transparent;
    background-color: transparent;
    color: #969696;
    font-weight: 600;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    &:hover{
        border-bottom: 2px solid #4c9c93;
        color: #4c9c93;
        cursor: pointer;
    }
    @media (max-width: 900px) {
    font-size: 16px;
  }
`;

export const Title = styled.h1 `
  font-weight: 500;
  font-size: 4rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Footer = styled.h1 `
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 2rem;
`;