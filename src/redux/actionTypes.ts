export interface IAction {
  type: string;
  error?: any;
  data?: any;
  query?: any;
  payload?: any;
  reloadData?: any;
  setting?: any;
  loadMoreData?: any;
}
