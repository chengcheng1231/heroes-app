import { all, put, takeLatest } from 'redux-saga/effects';
import apiClient from '../../shared/api/api.config';
import { IAction } from '../actionTypes';
import {
  EDIT_HERO_PROFILE,
  EDIT_HERO_PROFILE_ERROR,
  EDIT_HERO_PROFILE_SUCCESS,
  FETCH_HEROES_LIST,
  FETCH_HEROES_LIST_ERROR,
  FETCH_HERO_PROFILE,
  FETCH_HERO_PROFILE_ERROR,
  FETCH_HERO_PROFILE_SUCCESS,
} from '../actions/heroes';

export function* fetchHeroesListSaga() {
  const { response, error } = yield apiClient.get('');
  // if (response) {
  //   yield put({ type: FETCH_HEROES_LIST_SUCCESS, payload: response });
  // }

  if (true) {
    yield put({ type: FETCH_HEROES_LIST_ERROR, payload: error });
  }
}

export function* fetchHeroProfileSaga(action: IAction) {
  const { heroId } = action.payload as { heroId: string };
  const { response, error } = yield apiClient.get(`${heroId}/profile`);
  if (response) {
    yield put({ type: FETCH_HERO_PROFILE_SUCCESS, payload: response });
  }

  if (error) {
    yield put({ type: FETCH_HERO_PROFILE_ERROR, payload: error });
  }
}

export function* editHeroProfileSaga(action: IAction) {
  const { heroId, heroProfile } = action.payload as {
    heroId: string;
    heroProfile: { str: number; int: number; agi: number; luk: number };
  };
  const { response, error } = yield apiClient.patch(`/${heroId}/profile`, {
    data: heroProfile,
  });

  if (response && response === 'OK') {
    yield put({
      type: FETCH_HERO_PROFILE,
      payload: { heroId },
    });
  }

  if (response) {
    yield put({ type: EDIT_HERO_PROFILE_SUCCESS, payload: response });
  }

  if (error) {
    yield put({ type: EDIT_HERO_PROFILE_ERROR, payload: error });
  }
}

export function* heroesSaga() {
  yield all([
    takeLatest(FETCH_HEROES_LIST, fetchHeroesListSaga),
    takeLatest(FETCH_HERO_PROFILE, fetchHeroProfileSaga),
    takeLatest(EDIT_HERO_PROFILE, editHeroProfileSaga),
  ]);
}
