import { AnimatePresence, motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

interface ModalI {
  open: boolean;
  action?: string;
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
`;

const ModalBackdrop = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  min-height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const ModalBody = styled(motion.div)`
  position: absolute;
  padding: 2em 3em;
  border-radius: ${({ theme }) => theme.radius};
  background-color: ${({ theme }) => theme.common.white};
  z-index: 1;
`;

const ModalClose = styled.button`
  position: absolute;
  right: 8px;
  top: 0;
  z-index: 1;
  padding: 4px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

const Modal: FC<PropsWithChildren<ModalI>> = props => {
  const dispatch = useDispatch();

  const { children, open, action } = props;

  const handleCloseModal = () => {
    if (action) {
      dispatch({
        type: action,
        payload: false,
      });
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <ModalContainer>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ModalBackdrop onClick={handleCloseModal} />
          </motion.div>

          <ModalBody
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.7, y: 1 }}
            transition={{ duration: 0.2 }}
          >
            <ModalClose onClick={handleCloseModal}>x</ModalClose>
            {children}
          </ModalBody>
        </ModalContainer>
      )}
    </AnimatePresence>
  );
};

export { Modal };
