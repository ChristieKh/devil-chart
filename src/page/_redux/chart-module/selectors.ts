import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { CHART_REDUCER_NAME } from "./_constants";
import { ReduxStoreType } from "../_types";
import { ChartStateType } from './_types';

export const chartSelector = (store: ReduxStoreType) =>
  store[CHART_REDUCER_NAME] || initialState;

export const getChartDataSelector = createSelector(
  [chartSelector],
  ({ data }: ChartStateType) => data,
);

export const isLoadingChartSelector = createSelector(
    [chartSelector],
    ({ isLoading }: ChartStateType) => isLoading
);

export const isUserLoginSelector = createSelector(
    [chartSelector],
    ({ isUserLogin }: ChartStateType) => isUserLogin
);