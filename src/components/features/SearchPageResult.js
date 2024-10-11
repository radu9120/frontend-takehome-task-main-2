import React, { useState } from "react";
import SearchEngine from "./SearchEngine";
import SearchResults from "./SearchResult";

const SearchPageResults = () => {
  const [filters, setFilters] = useState(null);
  const [showResults, setShowResults] = useState(true);

  const handleFilterChange = newFilters => {
    setFilters(newFilters);
    setShowResults(true);
  };

  return (
    <>
      <SearchEngine onFilterChange={handleFilterChange} />
      {showResults && <SearchResults filters={filters} />} {/* Always show results */}
    </>
  );
};

export default SearchPageResults;
