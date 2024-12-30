import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;

    text-decoration: none;
  }

  ul, ol, li {
    list-style-type: none;
  }

  html, body {
    height: 100%;  
  }
  
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    transition: background-color 0.3s, color 0.3s;
  }

  #root {
    height: 100%;  
  }`