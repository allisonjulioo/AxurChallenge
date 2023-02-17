import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro&family=Ubuntu:wght@100;400;700&family=Sacramento&display=swap');
  body {
    margin: 0;
    padding: 0;
    background: ${({theme}) => theme.background.default};
    color: ${({theme}) => theme.typography.color};
    font-family: Ubuntu, sans-serif;
    min-height: 100vh
  }
`;

export { GlobalStyle };

