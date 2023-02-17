import {
  ActionCrawler,
  AddCrawlerAction,
  ListCrawlerAction
} from './action-types';

const initialState = [
  {
    text: '',
  },
];

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

export { newCrawler, listCrawlers };

