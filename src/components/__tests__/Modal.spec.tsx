import { render } from '@testing-library/react';
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
    const { getByTestId } = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Modal {...defaultProps}>
            <div data-testid='modal-content'>Test Content</div>
          </Modal>
        </ThemeProvider>
      </Provider>,
    );
    expect(getByTestId('modal-content')).toBeInTheDocument();
  });

  it('calls action when clicking on the modal backdrop', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Modal {...defaultProps}>
            <div data-testid='modal-content'>Test Content</div>
          </Modal>
        </ThemeProvider>
      </Provider>,
    );

    const modalBackdrop = getByTestId('modal-backdrop');
    expect(modalBackdrop).toBeInTheDocument();
  });

  it('calls action when clicking on the modal close button', () => {
    const { getByTestId, debug } = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Modal {...defaultProps}>
            <div data-testid='modal-content'>Test Content</div>
          </Modal>
        </ThemeProvider>
      </Provider>,
    );

    const modalCloseButton = getByTestId('modal-close');
    expect(modalCloseButton).toBeInTheDocument();
  });
});
