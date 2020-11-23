import { all } from "redux-saga/effects";
import {fetchChartDataWatcherSaga} from "../../page/_redux/chart-module/sagas/fetch-chart-data/fetch-chart-data-watcher-saga";
import {fetchRegistrationCheckWatcherSaga} from "../../page/_redux/chart-module/sagas/fetch-registration-check/fetch-registration-check-watcher-saga";

export default function* rootSaga() {
    yield all([
        fetchChartDataWatcherSaga(),
        fetchRegistrationCheckWatcherSaga()
    ])
}