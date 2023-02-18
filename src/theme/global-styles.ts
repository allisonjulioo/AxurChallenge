import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro&family=Roboto:wght@100;400;700&family=Sacramento&display=swap');
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.background.default};
    color: ${({ theme }) => theme.typography.color};
    min-height: 100vh
  }
  * {
    box-sizing: border-box;
    color: ${({ theme }) => theme.typography.color};
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
    outline: none;
}
span {
  font-size: 14px; 
}
`;

export { GlobalStyle };
