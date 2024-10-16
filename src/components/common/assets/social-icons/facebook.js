import React from "react";

const FacebookIcon = ({ width = 24, height = 24, fill = "currentColor" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H12.621V14.039H10.278V11.314H12.621V9.309C12.621 6.985 14.042 5.718 16.116 5.718C16.815 5.716 17.513 5.752 18.208 5.823V8.253H16.78C15.65 8.253 15.43 8.787 15.43 9.575V11.31H18.13L17.779 14.035H15.414V21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3Z"
      fill="#6F7170"
    />
  </svg>
);

export default FacebookIcon;
