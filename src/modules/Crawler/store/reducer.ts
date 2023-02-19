import {
  ActionCrawler,
  AddCrawlerAction,
  ListCrawlerAction,
  ModalCrawlerAction,
  DetailCrawlerAction,
} from './action-types';

const initialState = [] as ListCrawlerAction[];

const openModalCrawl = (state = false, action: ModalCrawlerAction) => {
  switch (action.type) {
    case ActionCrawler.MODAL_CRAWLER:
      return action.payload;
    default:
      return state;
  }
};

const newCrawler = (state = null, action: AddCrawlerAction) => {
  switch (action.type) {
    case ActionCrawler.NEW_CRAWLER:
      return action.payload;
    default:
      return state;
  }
};

const listCrawlers = (state = initialState, action: ListCrawlerAction) => {
  switch (action.type) {
    case ActionCrawler.LIST_CRAWLER:
      return action.payload;
    default:
      return state;
  }
};

const detailCrawl = (
  state = {} as DetailCrawlerAction,
  action: DetailCrawlerAction,
) => {
  switch (action.type) {
    case ActionCrawler.DETAIL_CRAWLER:
      return action.payload;
    default:
      return state;
  }
};

export { newCrawler, listCrawlers, openModalCrawl, detailCrawl };
