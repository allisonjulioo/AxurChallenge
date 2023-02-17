import { UniversalLoading } from 'components/UniversalLoading';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'router';
import { store } from 'store';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'theme/global-styles';
import { theme } from 'theme/theme';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<UniversalLoading />}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </Suspense>
    </BrowserRouter>
  </Provider>,
);

reportWebVitals();
