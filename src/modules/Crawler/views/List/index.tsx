import { useEffect } from 'react';
import styled from 'styled-components';
import { ListCrawlers } from './components/ListCrawlers';
import { useCrawler } from '../../hooks/useCrawler';

const Container = styled.div`
  height: 100vh;
`;

const ListCrawler = () => {
  const { getCrawlers } = useCrawler();

  useEffect(() => {
    getCrawlers();
  }, [getCrawlers]);

  return (
    <Container>
      <ListCrawlers />
    </Container>
  );
};

export { ListCrawler };
