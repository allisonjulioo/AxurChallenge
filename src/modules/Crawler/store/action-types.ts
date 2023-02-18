export enum ActionCrawler {
  MODAL_CRAWLER = 'modal_crawler',
  NEW_CRAWLER = 'new_crawler',
  LIST_CRAWLER = 'list_crawler',
}

export interface CrawlerState {
  id: string;
  keyword: string;
  status?: string;
  urls?: string[];
}

export interface ModalCrawlerAction {
  type: ActionCrawler.MODAL_CRAWLER;
  payload: boolean;
}

export interface AddCrawlerAction {
  type: ActionCrawler.NEW_CRAWLER;
  payload: CrawlerState;
}

export interface ListCrawlerAction {
  type: ActionCrawler.LIST_CRAWLER;
  payload: CrawlerState[];
}
