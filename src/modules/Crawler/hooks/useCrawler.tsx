import { externalInstance, internalInstance } from 'configs/axios';
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

export const ACTIVE_STATUS = 'active';

export const DONE_STATUS = 'done';

const useCrawler = () => {
  const dispatch = useDispatch();

  const getCrawlById = useCallback(
    async (id: string) => {
      const { data } = await internalInstance.get<CrawlerState>(id);

      dispatch(detailCrawlers(data));

      return { data };
    },
    [dispatch],
  );

  const getCrawlByIdExternal = useCallback(
    async (id: string) => {
      const { data, status } = await externalInstance.get<CrawlerState>(id);

      dispatch(detailCrawlers(data));

      return { data, status };
    },
    [dispatch],
  );

  const getAllCrawlers = useCallback(async () => {
    const { data } = await internalInstance.get<CrawlerState[]>('');

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

      await internalInstance.patch<CrawlerState>(crawl.id, payload);

      getAllCrawlers();
    },
    [getAllCrawlers],
  );

  const addToInternalApi = async (arg: Partial<CrawlResponse>) => {
    const { data: response, status } = await getCrawlByIdExternal(`${arg.id}`);

    const payload = {
      ...response,
      keyword: arg.keyword,
      created_at: new Date(),
      updated_at: new Date(),
    };

    const { data } = await internalInstance.post<CrawlerState>('', payload);

    if (data) {
      getAllCrawlers();

      return data;
    }

    alert('Impossivel cirar' + status);
    return { data: status };
  };

  const addNewCrawler = async (keyword: string) => {
    const { data } = await externalInstance.post<CrawlResponse>('', {
      keyword,
    });

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
