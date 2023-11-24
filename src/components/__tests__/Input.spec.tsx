import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { Input } from '../Input';

describe('Input component', () => {
  it('should render with input type text and change it', async () => {
    const onChangeInputMock = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <Input
          value='input text'
          alt='input-text'
          onChange={onChangeInputMock}
        />
      </ThemeProvider>,
    );

    const input = screen.getByAltText('input-text');

    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'input test 2' } });

    expect(onChangeInputMock).toBeCalledTimes(1);
  });
});
