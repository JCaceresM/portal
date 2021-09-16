import { ImagesActions } from "../actions/images"
import { IMAGE_GET_IMAGE_SLIDE, IMAGE_GET_IMAGE_SLIDE_SUCCESS, IMAGE_GET_IMAGE_SLIDE_FAILURE } from "../constant/actions/images"
import { ImagesState, initialState } from "../constant/types/images"

const images = (
    state: ImagesState = initialState,
    action: ImagesActions
  ): ImagesState => {
    switch (action.type) {
    case IMAGE_GET_IMAGE_SLIDE: {
        return {
            ...state,
            imageSlideFetching: true,
        }
    }
    case IMAGE_GET_IMAGE_SLIDE_SUCCESS: {
      
        
        return {
            ...state,
            imageSlideFetching: false,
            imageSlide: action.data
        }
    }
    case IMAGE_GET_IMAGE_SLIDE_FAILURE: {
        return {
            ...state,
            imageSlideFetching: false,
        }
    }
      default:
        return state
    }
  }
  
  export default images