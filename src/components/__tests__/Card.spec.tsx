import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { Card } from '../Card';

describe('Card component', () => {
  it('should render with children props', () => {
    render(
      <ThemeProvider theme={theme}>
        <Card>
          <span>Conteúdo do card</span>
        </Card>
      </ThemeProvider>,
    );

    expect(screen.getByText('Conteúdo do card')).toBeInTheDocument();
  });
});
