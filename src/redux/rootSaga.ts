import { all, fork } from 'redux-saga/effects';
import { herosSaga } from './sagas/herosSaga';

export default function* rootSaga() {
  yield all([fork(herosSaga)]);
}
