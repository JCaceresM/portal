import { call, ForkEffect, put, takeLatest } from "redux-saga/effects"
import { AuthLogInAction, AuthLogInFailure, AuthLogInSuccess } from "../actions/session"
import { CustomModalError } from "../AntDComponents/CustomNotifications"
import { AUTH_LOGIN } from "../constant/actions/session"
import { modulesApiHelper } from "../services/api/modules"
import { sessionApiHelper } from "../services/api/sessions"
import { createSession } from "../utils/session"

function* authLogInSaga({
    parameters,
}: AuthLogInAction) {
try {
    const { data: response } = yield call(() => {
        return sessionApiHelper.authLogIn(parameters)
    })
    
    
    createSession(response)
    yield call(() => {
        return modulesApiHelper.getModules()
    })

    yield put(AuthLogInSuccess())
} catch ({ response }) {
  
    
    CustomModalError({
        title:'Error',
        content:response.data.message || ''
    })
    yield put(AuthLogInFailure())
    }
}

function* watchLogIn(): Generator<
    ForkEffect<never>,
    void,
    unknown
> {
    yield takeLatest(AUTH_LOGIN, authLogInSaga   )
}

export {
    watchLogIn
}