import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ListCrawlers } from './components/ListCrawlers';
import { useCrawler } from '../../hooks/useCrawler';
import { Button } from 'components/Button';
import { InputNewCrawler } from './components/NewCrawler';
import { useDispatch } from 'react-redux';
import { openModalCrawler } from 'modules/Crawler/store/actions';

const Container = styled.div``;

const TopList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;

  h5 {
    color: #949494;
    font-weight: 400;
  }
`;

const ListCrawler = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const { getCrawlers } = useCrawler();

  const handleOpenModal = () => {
    dispatch(openModalCrawler(true));
  };

  const handleCloseModal = () => {
    dispatch(openModalCrawler(false));
  };

  useEffect(() => {
    getCrawlers();
  }, [getCrawlers]);

  return (
    <Container>
      <InputNewCrawler open={isOpen} />
      <TopList>
        <h5>Executados</h5>
        <Button onClick={handleOpenModal}>Nova busca</Button>
      </TopList>
      <ListCrawlers />
    </Container>
  );
};

export { ListCrawler };
