import { Card } from 'components/Card';
import { ACTIVE_STATUS, useCrawler } from 'modules/Crawler/hooks/useCrawler';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'store/reducers';
import styled from 'styled-components';
import { CrawlerState } from '../../../store/action-types';

const GridCrawled = styled(Card)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const HeadList = styled(GridCrawled)`
  background-color: transparent;
  margin-bottom: 0.5em;
  &:hover {
    box-shadow: none;
  }
`;

const ItemCrawled = styled(GridCrawled)`
  cursor: pointer;
  margin-bottom: 0.5em;
  strong {
    font-size: 1.4em;
    line-height: 1;
    text-align: right;
  }
  span {
    padding-left: 0.4em;
  }
`;

const TIMEOUT_POLLING = 5000;

const ListCrawlers = () => {
  const { updateCrawler, getCrawlById } = useCrawler();

  const crawlers = useSelector<RootState, CrawlerState[]>(
    ({ listCrawlers }) => listCrawlers,
  );

  const checkCrawlerStatus = useCallback(() => {
    if (!crawlers) return;

    const listOnlyActiveStatus = crawlers.filter(
      ({ status }) => status === ACTIVE_STATUS,
    );

    const intervalCrawl = setInterval(() => {
      listOnlyActiveStatus.forEach(async item => {
        const isActive = item.status === ACTIVE_STATUS;

        if (isActive) {
          const { data: crawl } = await getCrawlById(item.id);

          updateCrawler(crawl);
        }
      });
    }, TIMEOUT_POLLING);

    return () => {
      return clearInterval(intervalCrawl);
    };
  }, [crawlers, getCrawlById, updateCrawler]);

  useEffect(() => {
    const hasItemActive = crawlers.some(
      ({ status }) => status === ACTIVE_STATUS,
    );

    if (hasItemActive) checkCrawlerStatus();
  }, [crawlers, checkCrawlerStatus]);

  if (!crawlers.length) {
    return null;
  }

  return (
    <div>
      <HeadList>
        <span>Keyword</span>
        <span>ID</span>
        <span>Status</span>
        <span>Resultado</span>
      </HeadList>
      {crawlers.map(crawler => (
        <Link to={`/${crawler.id}`} key={crawler.id}>
          <ItemCrawled>
            <span>{crawler.keyword}</span>
            <span>{crawler.id}</span>
            <span>{crawler.status}</span>
            <span>{crawler.urls?.length} itens</span>
            <strong>›</strong>
          </ItemCrawled>
        </Link>
      ))}
    </div>
  );
};

export { ListCrawlers };
