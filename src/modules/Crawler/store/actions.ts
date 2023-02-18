import { Dispatch } from 'react';
import {
  ActionCrawler,
  AddCrawlerAction,
  CrawlerState,
  DetailCrawlerAction,
  ListCrawlerAction,
  ModalCrawlerAction,
} from './action-types';

export const openModalCrawler = (payload: boolean) => {
  return (dispatch: Dispatch<ModalCrawlerAction>) => {
    dispatch({
      type: ActionCrawler.MODAL_CRAWLER,
      payload,
    });
  };
};

export const addCrawler = (payload: CrawlerState) => {
  return (dispatch: Dispatch<AddCrawlerAction>) => {
    dispatch({
      type: ActionCrawler.NEW_CRAWLER,
      payload,
    });
  };
};

export const listCrawlers = (payload: CrawlerState[]) => {
  return (dispatch: Dispatch<ListCrawlerAction>) => {
    dispatch({
      type: ActionCrawler.LIST_CRAWLER,
      payload,
    });
  };
};

export const detailCrawlers = (payload: CrawlerState) => {
  return (dispatch: Dispatch<DetailCrawlerAction>) => {
    dispatch({
      type: ActionCrawler.DETAIL_CRAWLER,
      payload,
    });
  };
};
