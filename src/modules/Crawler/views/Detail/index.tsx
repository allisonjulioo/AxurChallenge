import { Badge } from 'components/Badge';
import { Empty } from 'components/Empty';
import { useCrawler } from 'modules/Crawler/hooks/useCrawler';
import { CrawlerState } from 'modules/Crawler/store/action-types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from 'store/reducers';
import styled from 'styled-components';
import { LinkCard } from './components/LinkCard';

const Content = styled.div`
  h1 {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

const Head = styled.div`
  margin: 1em 0.5em;
  display: flex;
  justify-content: space-between;
`;

const UrlList = styled.div`
  height: 64vh;
  overflow: auto;
`;

const DetailCrawler = () => {
  const { id } = useParams<{ id: string }>();

  const { getCrawlById } = useCrawler();

  const crawl = useSelector<RootState, CrawlerState>(
    ({ detailCrawl }) => detailCrawl,
  );

  useEffect(() => {
    if (id) getCrawlById(id);
  }, [getCrawlById, id]);

  return (
    <Content>
      <Head>
        <div>
          <h1>{crawl.keyword}</h1>
          <h5>ID: {crawl.id}</h5>
        </div>
        <div>
          <Badge text={crawl.status} />
          <span>{crawl.urls?.length} itens</span>
        </div>
      </Head>
      <UrlList>
        {!crawl.urls?.length ? (
          <Empty />
        ) : (
          crawl.urls?.map(url => <LinkCard key={url} url={url} />)
        )}
      </UrlList>
    </Content>
  );
};

export { DetailCrawler };
