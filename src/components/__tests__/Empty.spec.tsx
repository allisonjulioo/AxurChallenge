import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { Empty } from '../Empty';

describe('Empty component', () => {
  it('should render with default word', () => {
    render(
      <ThemeProvider theme={theme}>
        <Empty />
      </ThemeProvider>,
    );

    expect(screen.getByText('Está vazio por aqui!')).toBeInTheDocument();
  });

  it('should render with custom word', () => {
    render(
      <ThemeProvider theme={theme}>
        <Empty text='Texto personalizado!' />
      </ThemeProvider>,
    );

    expect(screen.getByText('Texto personalizado!')).toBeInTheDocument();
  });
});
