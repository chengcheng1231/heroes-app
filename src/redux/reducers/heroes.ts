import { IAction } from '../actionTypes';
import {
  EDIT_HERO_PROFILE,
  EDIT_HERO_PROFILE_ERROR,
  EDIT_HERO_PROFILE_SUCCESS,
  FETCH_HEROES_LIST,
  FETCH_HEROES_LIST_ERROR,
  FETCH_HEROES_LIST_SUCCESS,
  FETCH_HERO_PROFILE,
  FETCH_HERO_PROFILE_ERROR,
  FETCH_HERO_PROFILE_SUCCESS,
} from '../actions/heroes';

const initialState = {
  loading: false,
  data: [],
  error: null,
  heroesDataList: [],
  heroAbility: {},
};

function getKey(actionKey: string) {
  let key = '';

  switch (actionKey) {
    case 'HEROES_LIST':
      key = 'heroesDataList';
      break;
    case 'HERO_PROFILE':
      key = 'heroAbility';
      break;
    default:
      break;
  }

  return key;
}

export function heroesReducer(state = initialState, action: IAction = { type: '' }) {
  const actionKey = action.type.substring(action.type.indexOf('/') + 1, action.type.lastIndexOf('/'));
  const key = getKey(actionKey);

  switch (action.type) {
    case FETCH_HEROES_LIST:
    case FETCH_HERO_PROFILE:
    case EDIT_HERO_PROFILE:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_HERO_PROFILE_SUCCESS:
    case FETCH_HEROES_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        [key]: action.payload,
      };
    case EDIT_HERO_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case FETCH_HEROES_LIST_ERROR:
    case FETCH_HERO_PROFILE_ERROR:
    case EDIT_HERO_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
