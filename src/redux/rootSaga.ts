import { all, fork } from 'redux-saga/effects';
import { heroesSaga } from './sagas/heroesSaga';

export default function* rootSaga() {
  yield all([fork(heroesSaga)]);
}
