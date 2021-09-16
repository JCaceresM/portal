import { call, ForkEffect, put, takeLatest } from "redux-saga/effects"
import { getModulesFailure, getModulesSuccess } from "../actions/Modules"
import { MODULES_GET_MODULES } from "../constant/actions/modules"
import { modulesApiHelper } from "../services/api/modules"

function* getModulesSaga() {
try {
    const { data: response } = yield call(() => {
        return modulesApiHelper.getModules()
    })
    yield put(getModulesSuccess(response))
} catch ({ response }) {
    yield put(getModulesFailure())
    }
}

function* watchGetModules(): Generator<
    ForkEffect<never>,
    void,
    unknown
> {
    yield takeLatest(MODULES_GET_MODULES, getModulesSaga)
}
export {
    watchGetModules
}