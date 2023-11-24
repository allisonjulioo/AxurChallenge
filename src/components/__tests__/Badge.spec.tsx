import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { Badge } from '../Badge';

describe('Badge component', () => {
  it('should render with error status', () => {
    render(
      <ThemeProvider theme={theme}>
        <Badge />
      </ThemeProvider>,
    );
    const badgeText = screen.getByText('Não executado');
    expect(badgeText).toBeInTheDocument();
  });

  it('should render with done status', () => {
    render(
      <ThemeProvider theme={theme}>
        <Badge text='done' />
      </ThemeProvider>,
    );
    const badgeText = screen.getByText('Concluido');
    expect(badgeText).toBeInTheDocument();
  });

  it('should render with active status', () => {
    render(
      <ThemeProvider theme={theme}>
        <Badge text='active' />
      </ThemeProvider>,
    );
    const badgeText = screen.getByText('Em andamento');
    expect(badgeText).toBeInTheDocument();
  });
});
