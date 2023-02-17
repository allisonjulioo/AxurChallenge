import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.background.default};
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }
`;

export { GlobalStyle };
