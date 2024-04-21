import { all, fork } from 'redux-saga/effects';
import { dataSaga } from './sagas/dataSaga';

export default function* rootSaga() {
  yield all([fork(dataSaga)]);
}
