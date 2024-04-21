export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export interface FetchDataRequest {
  type: typeof FETCH_DATA_REQUEST;
}

export interface FetchDataSuccess {
  type: typeof FETCH_DATA_SUCCESS;
  payload: any[];
}

export interface FetchDataFailure {
  type: typeof FETCH_DATA_FAILURE;
  payload: string;
}

export type FetchDataActions = FetchDataRequest | FetchDataSuccess | FetchDataFailure;

export const fetchDataRequest = (): FetchDataRequest => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data: any[]): FetchDataSuccess => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error: string): FetchDataFailure => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
