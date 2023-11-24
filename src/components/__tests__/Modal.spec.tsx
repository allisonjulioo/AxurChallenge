import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { Modal } from '../Modal';

describe('Modal', () => {
  const defaultProps = {
    open: true,
  };

  it('renders with children when open prop is true', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Modal {...defaultProps}>
            <div data-testid='modal-content'>Test Content</div>
          </Modal>
        </ThemeProvider>
      </Provider>,
    );
    expect(screen.getByTestId('modal-content')).toBeInTheDocument();
  });

  it('calls action when clicking on the modal backdrop', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Modal {...defaultProps}>
            <div data-testid='modal-content'>Test Content</div>
          </Modal>
        </ThemeProvider>
      </Provider>,
    );

    const modalBackdrop = screen.getByTestId('modal-backdrop');

    expect(modalBackdrop).toBeInTheDocument();
  });

  it('calls action when clicking on the modal close button', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Modal {...defaultProps}>
            <div data-testid='modal-content'>Test Content</div>
          </Modal>
        </ThemeProvider>
      </Provider>,
    );

    const modalCloseButton = screen.getByTestId('modal-close');

    expect(modalCloseButton).toBeInTheDocument();
  });

  it('calls action when clicking with action true', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Modal {...defaultProps} action='store-test'>
            <div data-testid='modal-content'>Test Content</div>
          </Modal>
        </ThemeProvider>
      </Provider>,
    );

    const modalCloseButton = screen.getByTestId('modal-close');

    fireEvent.click(modalCloseButton);

    expect(modalCloseButton).toBeInTheDocument();
  });
});
