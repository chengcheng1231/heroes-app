import { all, takeLatest } from 'redux-saga/effects';
import { IAction } from '../actionTypes';
import { FETCH_DATA_REQUEST } from '../actions/fetchData';

export function* baseSaga(action: IAction): any {
  console.log('baseSaga', action);
  try {
    return 'success';
  } catch (error) {}
}

export function* dataSaga() {
  yield all([takeLatest(FETCH_DATA_REQUEST, baseSaga)]);
}
