import { useDispatch } from 'react-redux';
import axios from 'axios';
import { listCrawlers } from '../store/actions';
import { CrawlerState } from '../store/action-types';
import { useCallback } from 'react';

export interface CrawlResponse {
  id: string;
  keyword: string;
  status: string;
  urls: string[];
}

const internalApiUrl = process.env.REACT_APP_INTERNAL_API_URL;

const externalApiUrl = process.env.REACT_APP_EXTERNAL_API_URL;

const internalCraw = `${internalApiUrl}/crawl`;

const externalCraw = `${externalApiUrl}/crawl`;

const useCrawler = () => {
  const dispatch = useDispatch();

  const getCrawlers = useCallback(async () => {
    const { data } = await axios.get<CrawlerState[]>(internalCraw);

    dispatch(listCrawlers(data));

    return { data };
  }, [dispatch]);

  const addToInternalApi = async (payload: Partial<CrawlResponse>) => {
    const { data } = await axios.post<CrawlerState[]>(internalCraw, payload);

    if (data) {
      return getCrawlers();
    }
  };

  const addNewCrawler = async (keyword: string) => {
    const { data } = await axios.post<CrawlResponse>(externalCraw, { keyword });

    if (data.id) {
      return addToInternalApi({ keyword, id: data.id });
    }
    return { error: true };
  };

  return { getCrawlers, addNewCrawler };
};
export { useCrawler };
