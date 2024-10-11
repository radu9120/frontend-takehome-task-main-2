import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #ffffff; 
    overflow-x: hidden;
    overflow-y: auto;
  }


  *:focus {
    outline: none; 
    border-color: #26c281; 
  }
`;
