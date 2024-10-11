import styled from "styled-components";

export const ResultsContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h2 {
    font-size: 24px;
    font-weight: 600;
  }

  p {
    color: #6f7170;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const selectNumber = styled.select`
  padding: 8px 12px;
  height: 48px;
  width: 100px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  font-size: 14px;
  appearance: none;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='gray'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06 0L10 10.93l3.71-3.72a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E")
    no-repeat right 12px center;
  background-size: 18px;
  background-color: white;
`;

export const selectSort = styled.select`
  padding: 8px 12px;
  height: 48px;
  width: 150px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  font-size: 14px;
  appearance: none;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='gray'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06 0L10 10.93l3.71-3.72a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E")
    no-repeat right 12px center;
  background-size: 18px;
  background-color: white;
`;

export const ResultItem = styled.div`
  padding: 32px 0;

  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
`;

export const ResultHeader = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 10px;

  span {
    color: #0f1310;
    font-weight: bold;
    font-size: 14px;
    padding-bottom: 5px;
  }

  h1 {
    color: #26c485;
    font-weight: normal;
    text-decoration: none;
    font-size: 20px;
  }
`;

export const ResultContent = styled.p`
  color: #6f7170;
  margin: 10px 0;
`;

export const ResultDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  div {
    flex: 1;
  }

  label {
    display: block;
    font-weight: normal;
    margin-bottom: 5px;
  }

  span {
    color: #333;
    font-weight: bold;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin: 40px 0;

  button {
    background: #fff;
    border: 1px solid #ccc;
    padding: 8px 12px;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      border-color: #008347;
      color: #008347;
    }

    &.active {
      background-color: #008347;
      color: #fff;
      border-color: #008347;
    }
  }
`;
