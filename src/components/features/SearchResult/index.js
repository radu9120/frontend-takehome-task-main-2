import React, { useState, useEffect } from "react";
import * as S from "./styles";
import BoundedContainer from "../../common/Bounded";
import { getSearchData } from "../../../services";

const SearchResults = ({ filters }) => {
  const [results, setResults] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(5);
  const [sortOption, setSortOption] = useState("Sort"); // Default sort option
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const data = getSearchData();

    // Apply filters to the data
    let filteredData = data.filter(item => {
      if (!filters) return true; // No filters applied, show all results

      const matchCategory = !filters.category || item.category === filters.category;
      const matchDecision = !filters.decision || item.decision === filters.decision;
      const matchCompany = !filters.company || item.company.includes(filters.company);
      const matchDate = !filters.startDate || new Date(item.date) >= new Date(filters.startDate);
      const matchSearchQuery =
        !filters.searchQuery || // Filter based on the search query
        item.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(filters.searchQuery.toLowerCase());

      return matchCategory && matchDecision && matchCompany && matchDate && matchSearchQuery;
    });

    // Apply sorting based on the selected sort option
    filteredData = filteredData.sort((a, b) => {
      if (sortOption === "Date") {
        return new Date(b.date) - new Date(a.date); // Sort by date (newest first)
      } else if (sortOption === "Company") {
        return a.company.localeCompare(b.company); // Sort alphabetically by company
      } else if (sortOption === "Decision") {
        return a.decision.localeCompare(b.decision); // Sort alphabetically by decision
      }
      return 0; // No sorting applied (default)
    });

    setResults(filteredData);
    setTotalPages(Math.ceil(filteredData.length / resultsPerPage));
  }, [filters, resultsPerPage, sortOption]);

  const changePage = page => {
    setActivePage(page);
  };

  const handleResultsPerPageChange = e => {
    setResultsPerPage(parseInt(e.target.value));
    setActivePage(1); // Reset to first page when changing results per page
  };

  const handleSortOptionChange = e => {
    setSortOption(e.target.value); // Update sort option
  };

  // Paginated results
  const paginatedResults = results.slice((activePage - 1) * resultsPerPage, activePage * resultsPerPage);

  return (
    <BoundedContainer maxWidth="1032px" backgroundColor="#ffffff" borderRadius="10px" marginBottom="220px">
      <S.ResultsContainer>
        {/* Header */}
        <S.Header>
          <div>
            <h2>Results</h2>
            <p>
              Showing results {(activePage - 1) * resultsPerPage + 1}-
              {Math.min(activePage * resultsPerPage, results.length)} of {results.length}.
            </p>
          </div>
          <S.SelectContainer>
            {/* Dynamic options for results per page */}
            <S.selectNumber onChange={handleResultsPerPageChange} value={resultsPerPage}>
              {[5, 10, 25, 50].map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </S.selectNumber>

            {/* Sort By filter */}
            <S.selectSort onChange={handleSortOptionChange} value={sortOption}>
              <option value="Sort">Sort By</option>
              <option value="Date">Date</option>
              <option value="Company">Company</option>
              <option value="Decision">Decision</option>
            </S.selectSort>
          </S.SelectContainer>
        </S.Header>

        {/* Result Items */}
        {paginatedResults.map(result => (
          <S.ResultItem key={result.id}>
            <S.ResultHeader>
              <span>{new Date(result.date).toLocaleDateString()}</span>
              <h1>{result.title}</h1>
            </S.ResultHeader>
            <S.ResultContent>{result.content}</S.ResultContent>
            <S.ResultDetails>
              <div>
                <label>Category</label>
                <span>{result.category}</span>
              </div>
              <div>
                <label>Decision</label>
                <span>{result.decision}</span>
              </div>
              <div>
                <label>Company</label>
                <span>{result.company}</span>
              </div>
            </S.ResultDetails>
          </S.ResultItem>
        ))}

        {/* Pagination */}
        <S.Pagination>
          <button onClick={() => changePage(activePage - 1)} disabled={activePage === 1}>
            &lt;
          </button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => changePage(index + 1)}
              className={activePage === index + 1 ? "active" : ""}>
              {index + 1}
            </button>
          ))}
          <button onClick={() => changePage(activePage + 1)} disabled={activePage === totalPages}>
            &gt;
          </button>
        </S.Pagination>
      </S.ResultsContainer>
    </BoundedContainer>
  );
};

export default SearchResults;
