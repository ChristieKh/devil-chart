import {
  SET_CHART_LOADING_START,
  SET_CHART_LOADING_STOP,
  SET_CHART_DATA, SET_USER_LOGIN,
} from './actions';
import { ActionsType, ChartStateType } from './_types';

export const initialState: ChartStateType = {
  isLoading: true,
  data: [],
  isUserLogin: false
};

const reducer = (
  state: ChartStateType = initialState,
  { type, payload }: ActionsType,
) => {
  switch (type) {
    case SET_CHART_LOADING_START:
      return { ...state, isLoading: true };

    case SET_CHART_LOADING_STOP:
      return { ...state, isLoading: false };

    case SET_CHART_DATA:
      return { ...state, data: payload };

    case SET_USER_LOGIN:
      return { ...state, isUserLogin: true };

    default:
      return state;
  }
};

export default reducer;
