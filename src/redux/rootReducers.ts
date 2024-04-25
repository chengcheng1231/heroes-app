import { combineReducers } from 'redux';
import { heroesReducer } from './reducers/heroes';

const rootReducer = combineReducers({
  heroes: heroesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
