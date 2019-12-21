import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  * {
    box-sizing: border-box;
  }
`;

export const theme = {
  pink: '#ffc0cb',
  lightBlue: '#add8e6',
  darkBlue: '#61dafb',
  white: '#ffffff',
  black: '#20232a',
  red: '#ff5b5b',
  green: '#008000',

  fontSizeBig: '20px',
  fontSizeMedium: '16px',
  fontSizeSmall: '12px',
};

export default GlobalStyle;
