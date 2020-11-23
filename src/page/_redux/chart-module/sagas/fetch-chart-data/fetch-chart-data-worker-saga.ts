import { call, put } from 'redux-saga/effects';
import { fetchChartRequestData } from "../../../../../api/fetch-chart-request";
import { getChartDataFormatter } from '../../../../../utils/get-chart-data-formatter';
import {
  setChartAction,
  setChartLoadingStartAction,
  setChartLoadingStopAction,
  setUserLogoutAction,
} from '../../actions';

export function* fetchChartDataWorkerSaga() {
  try {
    yield put(setChartLoadingStartAction());

    const {graphsArray, statusCode} = yield call(fetchChartRequestData);

    if(statusCode === 500) {
      yield put(setUserLogoutAction());
    }

    if(Boolean(graphsArray.length)){
      const result = getChartDataFormatter(graphsArray);
      yield put(setChartAction(result));
    }
  } catch (error) {
    console.error('error in fetchChartDataWorkerSaga', error.message);
  } finally {
     yield put(setChartLoadingStopAction());
  }
}
