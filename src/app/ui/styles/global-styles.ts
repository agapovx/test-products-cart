
import { createGlobalStyle } from 'styled-components';
import { backgroundColor, textColor } from './colors';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0px;
    padding: 0;
    line-height: 1;
    color: ${textColor};
    background-color: ${backgroundColor};
    font-size: 12px;

    font-family: 'Quicksand';
  }
`;