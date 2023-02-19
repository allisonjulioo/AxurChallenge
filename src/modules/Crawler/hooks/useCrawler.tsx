import axios from 'axios';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { CrawlerState } from '../store/action-types';
import { detailCrawlers, listCrawlers } from '../store/actions';

export interface CrawlResponse {
  id: string;
  keyword: string;
  status: string;
  urls: string[];
  created_ad: Date;
  updated_at: Date;
}

const internalApiUrl = process.env.REACT_APP_INTERNAL_API_URL;

const externalApiUrl = process.env.REACT_APP_EXTERNAL_API_URL;

const internalCraw = `${internalApiUrl}/crawl`;

const externalCraw = `${externalApiUrl}/crawl`;

export const ACTIVE_STATUS = 'active';

export const DONE_STATUS = 'done';

const useCrawler = () => {
  const dispatch = useDispatch();

  const getCrawlById = useCallback(
    async (id: string) => {
      const { data } = await axios.get<CrawlerState>(`${internalCraw}/${id}`);

      dispatch(detailCrawlers(data));

      return { data };
    },
    [dispatch],
  );

  const getCrawlByIdExternal = useCallback(
    async (id: string) => {
      const { data } = await axios.get<CrawlerState>(`${externalCraw}/${id}`);

      dispatch(detailCrawlers(data));

      return { data };
    },
    [dispatch],
  );

  const getAllCrawlers = useCallback(async () => {
    const { data } = await axios.get<CrawlerState[]>(internalCraw);

    dispatch(listCrawlers(data));

    return { data };
  }, [dispatch]);

  const updateCrawler = useCallback(
    async (crawl: CrawlerState) => {
      if (crawl.status !== DONE_STATUS) return;

      const payload = {
        urls: crawl.urls,
        status: crawl.status,
        updated_at: new Date(),
      };

      await axios.patch<CrawlerState>(`${internalCraw}/${crawl.id}`, payload);

      getAllCrawlers();
    },
    [getAllCrawlers],
  );

  const addToInternalApi = async (arg: Partial<CrawlResponse>) => {
    const { data: response } = await getCrawlByIdExternal(`${arg.id}`);

    const payload = {
      ...response,
      keyword: arg.keyword,
      created_at: new Date(),
      updated_at: new Date(),
    };

    const { data } = await axios.post<CrawlerState>(internalCraw, payload);

    if (data) {
      getAllCrawlers();

      return data;
    }
  };

  const addNewCrawler = async (keyword: string) => {
    const { data } = await axios.post<CrawlResponse>(externalCraw, { keyword });

    if (data.id) {
      addToInternalApi({ keyword, id: data.id });
    }

    return { data };
  };

  return {
    getAllCrawlers,
    addNewCrawler,
    getCrawlById,
    updateCrawler,
    getCrawlByIdExternal,
  };
};
export { useCrawler };
