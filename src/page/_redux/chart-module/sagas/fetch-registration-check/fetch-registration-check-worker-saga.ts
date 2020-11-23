import { call, put } from 'redux-saga/effects';
import { fetchLoginRequest } from '../../../../../api/fetch-login-request';
import { setUserLoginAction } from '../../actions';
import { fetchRegistrationRequest } from '../../../../../api/fetch-registration-request';
import { LoginUserParamsType } from "../../../../_types";

export function* fetchRegistrationCheckWorkerSaga(params: LoginUserParamsType) {
  try {
    let userLogin;
    const check = yield call(fetchLoginRequest, params);

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
  }
}
