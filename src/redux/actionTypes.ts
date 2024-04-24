export interface IAction {
  type: string;
  payload?: {
    heroId: string;
    heroProfile: {
      str: number;
      int: number;
      agi: number;
      luk: number;
    };
  };
}
