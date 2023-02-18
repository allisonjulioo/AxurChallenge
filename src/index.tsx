import { UniversalLoading } from 'components/UniversalLoading';
import 'configs/i18n';
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

const app = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

app.render(
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
