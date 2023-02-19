import { motion } from 'framer-motion';
import styled from 'styled-components';

const Loading = styled.div`
  background-color: white;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  z-index: 0;
  gap: 4em;

  > div {
    background-color: ${({ theme }) => theme.palette.primary.main};
    z-index: 1;
    width: 50px;
    height: 50px;
  }
  > h4 {
    color: ${({ theme }) => theme.common.black};
  }
`;

const UniversalLoading = () => {
  return (
    <Loading>
      <motion.div
        className='box'
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ['0%', '0%', '50%', '50%', '0%'],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
      <h4>Carregando crawler...</h4>
    </Loading>
  );
};

export { UniversalLoading };
