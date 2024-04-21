import { all, put, takeLatest } from 'redux-saga/effects';
import apiClient from '../../shared/api/api.config';
import { IAction } from '../actionTypes';
import {
  FETCH_DATA_REQUEST,
  FETCH_HEROS_LIST,
  FETCH_HEROS_LIST_ERROR,
  FETCH_HEROS_LIST_SUCCESS,
} from '../actions/heros';

export function* baseSaga(action: IAction) {
  console.log('baseSaga', action);
  try {
    return 'success';
  } catch (error) {}
}

export function* fetchHerosListSaga(action: IAction) {
  const { response, error } = yield apiClient.get('https://hahow-recruit.herokuapp.com/heroes');
  console.log('fetchHerosListSaga', response, error);
  if (response) {
    yield put({ type: FETCH_HEROS_LIST_SUCCESS, payload: response });
  }

  if (error) {
    yield put({ type: FETCH_HEROS_LIST_ERROR, payload: error });
  }
}

export function* herosSaga() {
  yield all([takeLatest(FETCH_DATA_REQUEST, baseSaga), takeLatest(FETCH_HEROS_LIST, fetchHerosListSaga)]);
}
