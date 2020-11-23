import { take, fork } from 'redux-saga/effects';
import { fetchChartDataWorkerSaga } from './fetch-chart-data-worker-saga';
import { GET_CHART_DATA_SAGA_ACTION } from "../../actions";

export function* fetchChartDataWatcherSaga() {
  while (true) {
     yield take(GET_CHART_DATA_SAGA_ACTION);
    yield fork(fetchChartDataWorkerSaga);
  }
}
