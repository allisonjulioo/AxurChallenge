import {
  listCrawlers, newCrawler
} from 'modules/Crawler/views/List/store/reducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  newCrawler,
  listCrawlers,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
