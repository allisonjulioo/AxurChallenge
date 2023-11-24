import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { Button } from '../Button';

describe('Button component', () => {
  it('should render with correct styles', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>Adicionar</Button>
      </ThemeProvider>,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveStyle(`
      background: #ff5824;
      color: #fafafa;
      padding: 12px 36px;
      border-radius: 4px;
    `);
  });

  it('should call onClick function when clicked', () => {
    const onClick = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={onClick}>Adicionar</Button>
      </ThemeProvider>,
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
