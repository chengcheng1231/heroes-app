import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from '../actions/fetchData';
import { IAction } from '../actionTypes';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export function appReducer(state = initialState, action: IAction = { type: '' }) {
  console.log('appReducer4', action);
  switch (action.type) {
    case FETCH_DATA_REQUEST:
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
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
