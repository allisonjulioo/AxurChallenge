import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { Button } from '../Button';

describe('Button component', () => {
  it('should render with correct styles', () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button>Adicionar</Button>
      </ThemeProvider>,
    );
    const button = getByRole('button');
    expect(button).toHaveStyle(`
      background: #ff5824;
      color: #fafafa;
      padding: 12px 36px;
      border-radius: 4px;
    `);
  });

  it('should call onClick function when clicked', () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button onClick={onClick}>Adicionar</Button>
      </ThemeProvider>,
    );
    const button = getByRole('button');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
