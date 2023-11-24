import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import * as HookRoute from 'router/useRoute';
import { store } from 'store';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { Layout } from '../Layout';

const mockHook = jest.spyOn(HookRoute, 'useRoute');

const state = {
  title: 'test',
  label: 'test',
  visible: false,
  back: true,
};

describe('Layout component', () => {
  it('should render with children props', () => {
    mockHook.mockReturnValue({ state: { ...state, back: false } });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Layout id='test-layout'>
              <span>Conteúdo do Layout</span>
            </Layout>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Conteúdo do Layout')).toBeInTheDocument();
  });

  it('should render with children props and click back button', async () => {
    mockHook.mockReturnValue({ state });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Layout id='test-layout'>
              <span>Conteúdo do Layout</span>
            </Layout>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Conteúdo do Layout')).toBeInTheDocument();

    const buttonBack = await screen.findByText('←');

    fireEvent.click(buttonBack);
  });
});
