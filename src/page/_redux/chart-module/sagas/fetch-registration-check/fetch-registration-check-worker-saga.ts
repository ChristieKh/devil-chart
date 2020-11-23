import { call, delay, put, race } from 'redux-saga/effects';
import { fetchLoginRequest } from '../../../../../api/fetch-login-request';
import {fetchChartRequestData} from "../../../../../api/fetch-chart-request";
import { getChartDataFormatter } from '../../../../../utils/getChartDataFormatter';
import {setChartAction, setChartLoadingStartAction, setChartLoadingStopAction, setUserLoginAction} from '../../actions';
import { fetchRegistrationRequest } from '../../../../../api/fetch-registration-request';

export function* fetchRegistrationCheckWorkerSaga(params: any) {
  try {
    let userLogin;
    const check = yield call(fetchLoginRequest, params);
    //console.info('params', params, Boolean(check.length), check.message)

    if(Boolean(check.length)) {
      userLogin = true;
    } else {
      const register = yield call(fetchRegistrationRequest, {name: params.user, password: params.password});
      if(register.status === "ok") {
        userLogin = true;
      }
    }
    if(userLogin){
      yield put(setUserLoginAction());
    }
  } catch (error) {
    console.error('error in fetchRegistrationCheckWorkerSaga', error.message);
  } finally {
     //yield put(setChartLoadingStopAction());
  }
}
