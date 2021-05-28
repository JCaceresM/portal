
import { all } from 'redux-saga/effects'
import { watchGetModules } from './modules'
import { watchLogIn } from './session'


export default function* rootSaga(): Generator {
  yield all([
    watchLogIn(),
    watchGetModules()
  ])
}
