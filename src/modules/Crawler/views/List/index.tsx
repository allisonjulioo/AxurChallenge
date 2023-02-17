import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { CrawlerState } from './store/action-types';

const ListCrawler = () => {
  const listCrawlers = useSelector<RootState, CrawlerState[]>(
    state => state.listCrawlers,
  );

  console.log(listCrawlers);

  return (
    <div>
      <span>List crawler</span>
    </div>
  );
};

export { ListCrawler };

