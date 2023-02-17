import { Dispatch } from 'react';
import { ActionCrawler, AddCrawlerAction, CrawlerState, ListCrawlerAction } from './action-types';

export const addCrwaler = (payload: CrawlerState) => {
  return (dispatch: Dispatch<AddCrawlerAction>) => {
    dispatch({
      type: ActionCrawler.NEW_CRAWLER,
      payload,
    });
  };
};

export const listCrwalers = (payload: CrawlerState[]) => {
  return (dispatch: Dispatch<ListCrawlerAction>) => {
    dispatch({
      type: ActionCrawler.LIST_CRAWLER,
      payload,
    });
  };
};
