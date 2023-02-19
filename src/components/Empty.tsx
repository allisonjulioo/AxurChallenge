import { FC } from 'react';
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
  return (
    <ContentEmpty>
      <img src={require('assets/empty.png')} alt='' height='120' />
      <section>
        <h4>Está vazio por aqui!</h4>
        <span>{text ?? 'Sem dados'}</span>
      </section>
    </ContentEmpty>
  );
};

export { Empty };
