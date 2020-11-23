import { combineReducers } from 'redux';
import {CHART_REDUCER_NAME} from "../../page/_redux/chart-module/_constants";
import chartReducerModule from "../../page/_redux/chart-module/reducer";

export default combineReducers({
   [CHART_REDUCER_NAME]: chartReducerModule,
});
