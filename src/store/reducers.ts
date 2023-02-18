import * as crawlersReducers from 'modules/Crawler/store/reducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  ...crawlersReducers,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
