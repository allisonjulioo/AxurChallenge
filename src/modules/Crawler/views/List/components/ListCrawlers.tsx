import { Card } from 'components/Card';
import { Empty } from 'components/Empty';
import { AnimatePresence } from 'framer-motion';
import { ACTIVE_STATUS, useCrawler } from 'modules/Crawler/hooks/useCrawler';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import styled from 'styled-components';
import { CrawlerState } from '../../../store/action-types';
import { ItemCrawler } from './ItemCrawler';

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

const TIMEOUT_POLLING = 5000;

const ListCrawlers = () => {
  const { t } = useTranslation();

  const { updateCrawler, getCrawlByIdExternal } = useCrawler();

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
        <span>{t('modules.crawler.views.list.headList.keyword')}</span>
        <span>{t('modules.crawler.views.list.headList.id')}</span>
        <span>{t('modules.crawler.views.list.headList.status')}</span>
        <span>{t('modules.crawler.views.list.headList.result')}</span>
        <span>{t('modules.crawler.views.list.headList.createdAt')}</span>
        <span>{t('modules.crawler.views.list.headList.timer')}</span>
      </HeadList>
      <AnimatePresence>
        {crawlers.map((crawl, index) => (
          <ItemCrawler crawl={crawl} key={crawl.id} delay={index} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export { ListCrawlers };
