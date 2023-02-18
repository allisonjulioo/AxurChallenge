import { useDispatch } from 'react-redux';
import axios from 'axios';
import { listCrwalers } from '../store/actions';
import { CrawlerState } from '../store/action-types';

const useCrawler = () => {
  const dispatch = useDispatch();

  const getCrawlers = async () => {
    const { data } = await axios.get<CrawlerState[]>(
      'http://localhost:4040/crawlers',
    );

    dispatch(listCrwalers(data));

    return { data };
  };
  return { getCrawlers };
};
export { useCrawler };
