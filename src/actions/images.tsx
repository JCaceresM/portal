import {
  IMAGE_GET_IMAGE_SLIDE,
  IMAGE_GET_IMAGE_SLIDE_SUCCESS,
  IMAGE_GET_IMAGE_SLIDE_FAILURE,
} from "../constant/actions/images"
import { imageSlideType,  } from "../constant/types/images"

export type GetImagesSlideAction = {
  type: typeof IMAGE_GET_IMAGE_SLIDE
}

export const getImagesSlide = (): GetImagesSlideAction => {
  return {
    type: IMAGE_GET_IMAGE_SLIDE,
  }
}

export type GetImagesSlideSuccessAction = {
  type: typeof IMAGE_GET_IMAGE_SLIDE_SUCCESS
  data: imageSlideType[]
}

export const getImagesSlideSuccess = (data: imageSlideType[]): GetImagesSlideSuccessAction => {
  return {
    type: IMAGE_GET_IMAGE_SLIDE_SUCCESS,data
  }
}

export type GetImagesSlideFailureAction = {
  type: typeof IMAGE_GET_IMAGE_SLIDE_FAILURE
}

export const getImagesSlideFailure = (): GetImagesSlideFailureAction => {
  return {
    type: IMAGE_GET_IMAGE_SLIDE_FAILURE,
  }
}
export type ImagesActions =
  | GetImagesSlideAction
  | GetImagesSlideSuccessAction
  | GetImagesSlideFailureAction
