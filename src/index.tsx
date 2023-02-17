import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Router } from "router";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "theme/global-styles";
import { theme } from "theme/theme";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Suspense fallback={null}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </Suspense>
  </BrowserRouter>
);

reportWebVitals();
