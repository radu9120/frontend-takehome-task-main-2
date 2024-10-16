import React from "react";

const TikTokIcon = ({ width = 24, height = 24, fill = "currentColor" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 3C4.35503 3 3 4.35503 3 6V18C3 19.645 4.35503 21 6 21H18C19.645 21 21 19.645 21 18V6C21 4.35503 19.645 3 18 3H6ZM12 7H14C14 8.005 15.471 9 16 9V11C15.395 11 14.668 10.7342 14 10.2852V14C14 15.654 12.654 17 11 17C9.346 17 8 15.654 8 14C8 12.346 9.346 11 11 11V13C10.448 13 10 13.449 10 14C10 14.551 10.448 15 11 15C11.552 15 12 14.551 12 14V7Z"
      fill="#6F7170"
    />
  </svg>
);

export default TikTokIcon;
