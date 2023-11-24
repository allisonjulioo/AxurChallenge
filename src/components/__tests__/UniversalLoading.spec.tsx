import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { UniversalLoading } from '../UniversalLoading';

describe('UniversalLoading component', () => {
  it('should render component', () => {
    render(
      <ThemeProvider theme={theme}>
        <UniversalLoading />
      </ThemeProvider>,
    );

    expect(screen.getByText('Carregando crawler...')).toBeInTheDocument();
  });
});
