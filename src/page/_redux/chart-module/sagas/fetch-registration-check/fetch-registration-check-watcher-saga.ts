import { take, fork } from 'redux-saga/effects';
import { fetchRegistrationCheckWorkerSaga } from './fetch-registration-check-worker-saga';
import { LOGIN_SAGA_ACTION } from "../../actions";

export function* fetchRegistrationCheckWatcherSaga() {
  while (true) {
      const { payload } = yield take(LOGIN_SAGA_ACTION);
    yield fork(fetchRegistrationCheckWorkerSaga, payload);
  }
}
