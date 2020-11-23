import {Action, BaseAction} from '../../../config-redux/_types';
import {CharItemType} from './_types';

export const SET_CHART_LOADING_START = 'SET_CHART_LOADING_START';
export const setChartLoadingStartAction: BaseAction = () => ({
  type: SET_CHART_LOADING_START,
});

export const SET_CHART_LOADING_STOP = 'SET_CHART_LOADING_STOP';
export const setChartLoadingStopAction: BaseAction = () => ({
  type: SET_CHART_LOADING_STOP
});

export const LOGIN_SAGA_ACTION = 'LOGIN_SAGA_ACTION';
export const loginSagaAction: Action<Record<string, string>> = (payload: Record<string, string>) => ({
  type: LOGIN_SAGA_ACTION,
  payload,
});


export const GET_CHART_DATA_SAGA_ACTION = 'GET_CHART_DATA_SAGA_ACTION';
export const getChartDataSagaAction: BaseAction = () => ({
  type: GET_CHART_DATA_SAGA_ACTION,
});

export const SET_CHART_DATA = 'SET_CHART_DATA';
export const setChartAction: Action<Array<CharItemType>> = (payload: Array<CharItemType>) => ({
  type: SET_CHART_DATA,
  payload,
});

export const SET_USER_LOGIN = 'SET_USER_LOGIN ';
export const setUserLoginAction: BaseAction = () => ({
  type: SET_USER_LOGIN
});
