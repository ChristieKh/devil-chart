import { call, delay, put, race } from 'redux-saga/effects';
import { fetchLoginRequest } from '../../../../../api/fetch-login-request';
import {fetchChartRequestData} from "../../../../../api/fetch-chart-request";
import { getChartDataFormatter } from '../../../../../utils/getChartDataFormatter';
import {setChartAction, setChartLoadingStartAction, setChartLoadingStopAction} from '../../actions';

export function* fetchChartDataWorkerSaga() {
  try {
    yield put(setChartLoadingStartAction());

    // const params = {user: 'test', password: '1234'};
    // const login = yield call(fetchLoginRequest, params);

    const {graphsArray} = yield call(fetchChartRequestData);

    const chartDataFormatted = getChartDataFormatter(graphsArray);
    yield put(setChartAction(chartDataFormatted));
  } catch (error) {
    console.error('error in fetchChartDataWorkerSaga', error.message);
  } finally {
     yield put(setChartLoadingStopAction());
  }
}
