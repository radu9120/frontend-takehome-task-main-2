import styled from "styled-components";
import { Search } from "lucide-react";
export const form = styled.form`
  z-index: 0;
`;
export const SearchButton = styled.button`
  width: 193px;
  height: 48px;
  background-color: #26c485; /* Primary color */
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #006837;
  }

  &:focus {
    outline: none;
  }
  @media (max-width: 576px) {
    width: 100%;
    height: 40px;
  }
`;
// Title
export const Title = styled.h1`
  font-size: 42px;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 576px) {
    font-size: 32px;
  }
`;

// Subtitle
export const Subtitle = styled.p`
  font-size: 20px;
  color: #6f7170;
  font-weight: 400;
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  gap: 10px;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const SearchInputContainer = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 10px 15px 10px 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #26c281;
  }

  @media (max-width: 576px) {
    height: 40px;
    font-size: 14px;
  }
`;

// Search icon inside the input field
export const SearchIcon = styled(Search)`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  pointer-events: none;

  @media (max-width: 576px) {
    left: 10px;
  }
`;

// Filter container to hold all dropdowns
export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;
  z-index: 0;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

// Individual filter dropdown style
export const Filter = styled.div`
  flex: 1;

  select {
    width: 100%;
    height: 48px;
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;

    appearance: none;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='gray'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06 0L10 10.93l3.71-3.72a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E")
      no-repeat right 12px center;
    background-size: 18px;
    background-color: white;

    &:focus {
      outline: none;
      border-color: #26c281;
    }

    @media (max-width: 576px) {
      height: 40px;
      font-size: 14px;
    }
  }

  input {
    width: 100%;
    height: 48px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    z-index: 0;

    &:focus {
      outline: none;
      border-color: #26c281;
    }

    @media (max-width: 576px) {
      height: 40px;
      font-size: 14px;
    }
  }
`;

// Date Input Container
export const DateInputContainer = styled.div`
  position: relative;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

// Styled date input remains the same
export const DateInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 10px 15px;
  padding-right: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #26c281;
  }

  @media (max-width: 576px) {
    height: 40px;
    width: 100%;
    font-size: 14px;
  }
`;

// Clear Filters Button
export const ClearFilters = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #008347;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  background: none;
  border: none;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

// Clear Filters Container
export const ClearFiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 100%;

  @media (max-width: 576px) {
    margin-top: 20px;
  }
`;
