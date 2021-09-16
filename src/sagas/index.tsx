
import { all } from 'redux-saga/effects'
import { watchGetImageSlide } from './images'
import { watchGetModules } from './modules'
import { watchLogIn } from './session'


export default function* rootSaga(): Generator {
  yield all([
    watchLogIn(),
    watchGetModules(),
    watchGetImageSlide(),
  ])
}
