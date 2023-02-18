import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Modal } from 'components/Modal';
import { useCrawler } from 'modules/Crawler/hooks/useCrawler';
import { ActionCrawler } from 'modules/Crawler/store/action-types';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import styled from 'styled-components';

const BodyModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2em;
`;

const InputNewCrawler: FC<{ open: boolean }> = ({ open }) => {
  const openModalCrawl = useSelector<RootState, boolean>(
    ({ openModalCrawl }) => openModalCrawl,
  );

  const { addNewCrawler } = useCrawler();

  const [keyword, setKeyWord] = useState('');

  const handleAddNewCrawl = () => {
    if (keyword) addNewCrawler(keyword);
  };

  return (
    <Modal open={openModalCrawl} action={ActionCrawler.MODAL_CRAWLER}>
      <BodyModal>
        <h4>Criar nova pesquisa</h4>
        <Input
          placeholder='Digite a palavra'
          type='text'
          value={keyword}
          onChange={e => setKeyWord(e.target.value)}
        />
        <Button onClick={handleAddNewCrawl}>Criar pesquisa</Button>
      </BodyModal>
    </Modal>
  );
};

export { InputNewCrawler };
