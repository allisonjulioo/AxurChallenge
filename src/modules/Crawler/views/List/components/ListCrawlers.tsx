import { Badge } from 'components/Badge';
import { Card } from 'components/Card';
import { ACTIVE_STATUS, useCrawler } from 'modules/Crawler/hooks/useCrawler';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'store/reducers';
import styled from 'styled-components';
import { CrawlerState } from '../../../store/action-types';
import { differenceInMinutes, format } from 'date-fns';
import { Empty } from 'components/Empty';

const GridCrawled = styled(Card)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  @media (max-width: ${({ theme }) => theme.breakpointMD}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }
`;

const HeadList = styled(GridCrawled)`
  background-color: transparent;
  margin-bottom: 0.5em;
  &:hover {
    box-shadow: none;
  }
  @media (max-width: ${({ theme }) => theme.breakpointMD}) {
    display: none;
  }
`;

const ItemCrawled = styled(GridCrawled)`
  cursor: pointer;
  margin-bottom: 0.5em;
  strong {
    font-size: 1.4em;
    line-height: 1;
    text-align: right;

    @media (max-width: ${({ theme }) => theme.breakpointMD}) {
      display: none;
    }
  }
  span {
    padding-left: 0.2em;
  }
`;

const TIMEOUT_POLLING = 5000;

const ListCrawlers = () => {
  let intervalCrawl: NodeJS.Timer;

  const { updateCrawler, getCrawlByIdExternal } = useCrawler();

  const crawlers = useSelector<RootState, CrawlerState[]>(
    ({ listCrawlers }) => listCrawlers,
  );

  const checkCrawlerStatus = useCallback(() => {
    if (!crawlers) return;

    const listOnlyActiveStatus = crawlers.filter(
      ({ status }) => status === ACTIVE_STATUS,
    );

    intervalCrawl = setInterval(() => {
      listOnlyActiveStatus.forEach(async item => {
        const isActive = item.status === ACTIVE_STATUS;

        if (isActive) {
          const { data: crawl } = await getCrawlByIdExternal(item.id);

          updateCrawler(crawl);
        }
      });
    }, TIMEOUT_POLLING);

    return () => {
      return clearInterval(intervalCrawl);
    };
  }, [crawlers, getCrawlByIdExternal, updateCrawler]);

  useEffect(() => {
    clearInterval(intervalCrawl);
    const hasItemActive = crawlers.some(
      ({ status }) => status === ACTIVE_STATUS,
    );

    if (hasItemActive) {
      return checkCrawlerStatus();
    }
  }, [crawlers, checkCrawlerStatus]);

  if (!crawlers.length) {
    return <Empty />;
  }

  return (
    <div>
      <HeadList>
        <span>Keyword</span>
        <span>ID</span>
        <span>Status</span>
        <span>Resultado</span>
        <span>Criado em</span>
        <span>Tempo decorrido</span>
      </HeadList>
      {crawlers.map(crawl => (
        <Link to={`/${crawl.id}`} key={crawl.id}>
          <ItemCrawled>
            <span>{crawl.keyword}</span>
            <span>{crawl.id}</span>
            <Badge text={crawl.status} />
            <span>{crawl.urls?.length} urls</span>
            <span>{format(new Date(crawl.created_at), 'dd/MM HH:mm ')}</span>
            <span>
              {differenceInMinutes(
                new Date(crawl.updated_at),
                new Date(crawl.created_at),
              )}{' '}
              min
            </span>
            <strong>›</strong>
          </ItemCrawled>
        </Link>
      ))}
    </div>
  );
};

export { ListCrawlers };
