import React from "react";

const FileIcon = ({ width = 32, height = 32, stroke = "#BDE9D2" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.3346 25.6666H21.668C23.1408 25.6666 24.3346 24.4727 24.3346 22.9999V11.9999L18.668 6.33325H10.3346C8.86188 6.33325 7.66797 7.52716 7.66797 8.99992V22.9999C7.66797 24.4727 8.86188 25.6666 10.3346 25.6666Z"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 12.3334H18.3333V6.66669"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 20.3333H19"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 16.3333H19"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default FileIcon;
