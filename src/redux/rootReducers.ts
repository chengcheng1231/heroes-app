import { combineReducers } from 'redux';
import { herosReducer } from './reducers/heros';

const rootReducer = combineReducers({
  heros: herosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
