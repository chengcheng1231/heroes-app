import {
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_HEROS_LIST,
  FETCH_HEROS_LIST_ERROR,
  FETCH_HEROS_LIST_SUCCESS,
} from '../actions/heros';
import { IAction } from '../actionTypes';

const initialState = {
  loading: false,
  data: [],
  error: null,
  herosDataList: [],
};

export function herosReducer(state = initialState, action: IAction = { type: '' }) {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
    case FETCH_HEROS_LIST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_HEROS_LIST_SUCCESS:
      console.log('appReducer4', action.payload);

      return {
        ...state,
        loading: false,
        herosDataList: action.payload,
      };
    case FETCH_DATA_ERROR:
    case FETCH_HEROS_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
