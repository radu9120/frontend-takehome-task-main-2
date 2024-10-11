import React, { useState } from "react";
import * as S from "./styles";
import BoundedContainer from "../../common/Bounded";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchEngine = ({ onFilterChange }) => {
  const [category, setCategory] = useState("Category");
  const [decision, setDecision] = useState("Decision");
  const [company, setCompany] = useState("Company");
  const [startDate, setStartDate] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = e => {
    e.preventDefault();

    onFilterChange({
      category: category === "Category" ? "" : category,
      decision: decision === "Decision" ? "" : decision,
      company: company === "Company" ? "" : company,
      startDate,
      searchQuery,
    });
  };

  const handleClearFilters = () => {
    setCategory("Category");
    setDecision("Decision");
    setCompany("Company");
    setStartDate(null);
    setSearchQuery("");

    onFilterChange({
      category: "",
      decision: "",
      company: "",
      startDate: null,
      searchQuery: "",
    });
  };

  return (
    <BoundedContainer maxWidth="1032px" padding="40px" backgroundColor="#ffffff" borderRadius="10px" marginTop="80px">
      <S.Title>AI-Powered Regulatory Search</S.Title>
      <S.Subtitle>Use the search engine to search for publications from courts and regulators.</S.Subtitle>

      {/* Wrap Search Input and Button in a Form */}
      <S.form onSubmit={handleSearch}>
        <S.SearchBarContainer>
          <S.SearchInputContainer>
            <S.SearchInput placeholder="Search" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
            <S.SearchIcon width={18} />
          </S.SearchInputContainer>
          <S.SearchButton type="submit">Search</S.SearchButton>
        </S.SearchBarContainer>
      </S.form>

      {/* Filters */}
      <S.FilterContainer>
        {/* Category Filter */}
        <S.Filter>
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option>Category</option>
            <option>Banking</option>
            <option>Insurance</option>
            <option>Loan</option>
            <option>Current Account</option>
            <option>Savings Account</option>
            <option>Mortgage</option>
            <option>Credit Card</option>
            <option>Overdraft</option>
            <option>PPI</option>
            <option>Standing Order</option>
            <option>ATM</option>
            <option>Cheque</option>
          </select>
        </S.Filter>

        {/* Decision Filter */}
        <S.Filter>
          <select value={decision} onChange={e => setDecision(e.target.value)}>
            <option>Decision</option>
            <option>Upheld</option>
            <option>Rejected</option>
            <option>Partially Upheld</option>
          </select>
        </S.Filter>

        {/* Company Filter */}
        <S.Filter>
          <S.DateInputContainer>
            <select value={company} onChange={e => setCompany(e.target.value)}>
              <option>Company</option>
              <option>Barclays</option>
              <option>HSBC</option>
              <option>Santander</option>
              <option>Lloyds Bank</option>
              <option>Nationwide Building Society</option>
              <option>Metro Bank</option>
              <option>NatWest Bank</option>
              <option>Aviva Plc</option>
              <option>TSB Bank</option>
              <option>Halifax</option>
            </select>
          </S.DateInputContainer>
        </S.Filter>

        {/* Date Filter */}
        <S.DateInputContainer>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            placeholderText=" Date"
            customInput={<S.DateInput />}
            showIcon
            icon={
              <svg
                style={{ top: "50%", transform: "translateY(-50%)" }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
              </svg>
            }
          />
        </S.DateInputContainer>
      </S.FilterContainer>

      <S.ClearFiltersContainer>
        <S.ClearFilters onClick={handleClearFilters}>Clear Filters</S.ClearFilters>
      </S.ClearFiltersContainer>
    </BoundedContainer>
  );
};

export default SearchEngine;
