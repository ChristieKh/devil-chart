import { CHART_REDUCER_NAME } from "./chart-module/_constants";
import { ChartStateType } from "./chart-module";

export type ReduxStoreType = {
  [CHART_REDUCER_NAME]: ChartStateType;
};
