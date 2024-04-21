import { combineReducers } from 'redux';
import { appReducer } from './reducers/dataReducer';
// 導入其他的 reducer

const rootReducer = combineReducers({
  data: appReducer,
  // 在這裡合併其他的 reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
