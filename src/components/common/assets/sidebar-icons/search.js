import React from "react";

const SearchIcon = ({ width = 32, height = 32, stroke = "#BDE9D2" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.6666 25.6666L20.6666 20.6666L25.6666 25.6666ZM6.33331 14.6666C6.33331 10.0643 10.0643 6.33331 14.6666 6.33331C19.269 6.33331 23 10.0643 23 14.6666C23 19.269 19.269 23 14.6666 23C10.0643 23 6.33331 19.269 6.33331 14.6666Z"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SearchIcon;
