import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  /* Reset & Box-Sizing */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  /* Base body styles with fluid font size */
  body {
    font-family: 'Inter', sans-serif;
    background: #F7F9FA;
    color: #0A2640;
    line-height: 1.5;
    font-size: clamp(1rem, 2vw, 1.125rem);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  /* WebKit scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #3FD0C9;
    border-radius: 4px;
  }
`;
