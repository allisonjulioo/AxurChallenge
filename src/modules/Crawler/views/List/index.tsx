import { Button } from 'components/Button';
import { openModalCrawler } from 'modules/Crawler/store/actions';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useCrawler } from '../../hooks/useCrawler';
import { ListCrawlers } from './components/ListCrawlers';
import { InputNewCrawler } from './components/NewCrawler';

const Container = styled.div``;

const TopList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1em 0;
`;

const ListCrawler = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { getAllCrawlers } = useCrawler();

  const handleOpenModal = () => {
    dispatch(openModalCrawler(true));
  };

  useEffect(() => {
    getAllCrawlers();
  }, [getAllCrawlers]);

  return (
    <Container>
      <InputNewCrawler />
      <TopList>
        <h5>{t('modules.crawler.views.list.subTitle')}</h5>
        <Button onClick={handleOpenModal}>
          {t('modules.crawler.views.list.buttonAdd')}
        </Button>
      </TopList>
      <ListCrawlers />
    </Container>
  );
};

export { ListCrawler };
