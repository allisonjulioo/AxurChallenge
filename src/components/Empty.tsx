import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ContentEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2em 0;
  min-height: 50vh;
  gap: 2em;
  text-align: center;
`;

const Empty: FC<{ text?: string }> = ({ text }) => {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      <ContentEmpty>
        <motion.img
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          src={require('assets/empty.png')}
          alt=''
          height='120'
        />

        <motion.section
          initial={{ y: 4, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <h4>{t('components.empty.title')}</h4>
          <span>{text ?? t('components.empty.paragraph')}</span>
        </motion.section>
      </ContentEmpty>
    </AnimatePresence>
  );
};

export { Empty };
