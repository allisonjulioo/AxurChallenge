import { Button } from 'components/Button';
import { Card } from 'components/Card';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import styled from 'styled-components';
import { CrawlerState } from '../../../store/action-types';

const GridCrawled = styled(Card)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const HeadList = styled(GridCrawled)`
  background-color: transparent;
  margin-bottom: 0.5em;
`;

const ItemCrawled = styled(GridCrawled)`
  cursor: pointer;
  margin-bottom: 0.5em;
`;

const ListCrawlers = () => {
  const crawlers = useSelector<RootState, CrawlerState[]>(
    ({ listCrawlers }) => listCrawlers,
  );

  if (!crawlers) {
    return null;
  }

  return (
    <div>
      <HeadList>
        <span>ID</span>
        <span>Keyword</span>
        <span>Status</span>
      </HeadList>
      {crawlers.map(crawler => (
        <ItemCrawled key={crawler.id}>
          <span>{crawler.id}</span>
          <span>{crawler.keyword}</span>
          <span>{crawler.status}</span>
        </ItemCrawled>
      ))}
    </div>
  );
};

export { ListCrawlers };
