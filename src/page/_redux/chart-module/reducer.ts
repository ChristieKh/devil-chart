import {
  SET_CHART_LOADING_START,
  SET_CHART_LOADING_STOP,
  SET_CHART_DATA_ACTION,
  SET_USER_LOGIN_ACTION,
  SET_USER_LOGOUT_ACTION,
} from './actions';
import { ActionsType, ChartStateType } from './_types';

export const initialState: ChartStateType = {
  isLoading: true,
  data: [],
  isUserLogin: false,
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

    case SET_CHART_DATA_ACTION:
      return { ...state, data: payload };

    case SET_USER_LOGIN_ACTION:
      return { ...state, isUserLogin: true };

    case SET_USER_LOGOUT_ACTION:
      return { ...state, isUserLogin: false };

    default:
      return state;
  }
};

export default reducer;
