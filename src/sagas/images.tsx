import { call, ForkEffect, put, takeLatest } from "redux-saga/effects"
import { getImagesSlideFailure, getImagesSlideSuccess } from "../actions/images"
import { showNotification } from "../AntDComponents/CustomNotifications"
import { IMAGE_GET_IMAGE_SLIDE } from "../constant/actions/images"
import { imagesApiHelper } from "../services/api/images"

function* getImageSlideSaga() {
  try {
    const { data: response } = yield call(() => {
      return imagesApiHelper.getImageSlide()
    })
    yield put(getImagesSlideSuccess(response))
  } catch ({ response }) {
      showNotification({
        title: 'error',
        description: 'Error al obtener Slide',
        type:'info'
      })
    yield put(getImagesSlideFailure())
  }
}

function* watchGetImageSlide(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(IMAGE_GET_IMAGE_SLIDE, getImageSlideSaga)
}
export { watchGetImageSlide }
