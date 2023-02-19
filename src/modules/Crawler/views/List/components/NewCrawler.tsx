import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Modal } from 'components/Modal';
import { useCrawler } from 'modules/Crawler/hooks/useCrawler';
import { ActionCrawler } from 'modules/Crawler/store/action-types';
import { openModalCrawler } from 'modules/Crawler/store/actions';
import { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import styled from 'styled-components';

const BodyModal = styled.div`
  h4 {
    margin-bottom: 1em;
  }
  form {
    gap: 0.4em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const InputNewCrawler = () => {
  const dispatch = useDispatch();

  const openModalCrawl = useSelector<RootState, boolean>(
    ({ openModalCrawl }) => openModalCrawl,
  );

  const { addNewCrawler } = useCrawler();

  const [keyword, setKeyWord] = useState('');

  const handleAddNewCrawl = async (event: FormEvent<EventTarget>) => {
    event.preventDefault();

    if (!keyword) {
      return;
    }

    const { data } = await addNewCrawler(keyword);

    if (data) {
      dispatch(openModalCrawler(false));
      setKeyWord('');
    }
  };

  return (
    <Modal open={openModalCrawl} action={ActionCrawler.MODAL_CRAWLER}>
      <BodyModal>
        <h4>Criar nova pesquisa</h4>
        <form onClick={handleAddNewCrawl}>
          <Input
            placeholder='Digite a palavra'
            type='text'
            value={keyword}
            onChange={e => setKeyWord(e.target.value)}
          />
          <Button type='submit'>Criar pesquisa</Button>
        </form>
      </BodyModal>
    </Modal>
  );
};

export { InputNewCrawler };
