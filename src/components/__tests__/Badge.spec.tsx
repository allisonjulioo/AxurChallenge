import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { Badge } from '../Badge';

describe('Badge component', () => {
  it('should render with error status', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Badge />
      </ThemeProvider>,
    );
    const badgeText = getByText('Não executado');
    expect(badgeText).toBeInTheDocument();
  });

  it('should render with done status', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Badge text='done' />
      </ThemeProvider>,
    );
    const badgeText = getByText('Concluido');
    expect(badgeText).toBeInTheDocument();
  });

  it('should render with active status', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Badge text='active' />
      </ThemeProvider>,
    );
    const badgeText = getByText('Em andamento');
    expect(badgeText).toBeInTheDocument();
  });
});
