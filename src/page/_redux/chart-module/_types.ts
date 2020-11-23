export type ChartStateType = {
  data: Array<CharItemType>;
  isLoading: boolean;
  isUserLogin: boolean;
};

export type CharItemType = {
  id: string;
  data: Array<CoordinatesType>
}

type CoordinatesType = {
  x: string;
  y: number;
}

export type ActionsType = {
  type: string;
  payload?: Array<CharItemType>;
};
