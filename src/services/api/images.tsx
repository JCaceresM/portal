import { AxiosResponse } from "axios"
import { WEB_SERVICE_API_IMAGES_GET_IMAGES_SLIDE } from "../../constant/routes"
import { ImageType } from "../../constant/types/images"
import { getRequest } from "../../utils/callers"
const getImageSlide = (): Promise<AxiosResponse<ImageType>> => {
  return getRequest<ImageType>(WEB_SERVICE_API_IMAGES_GET_IMAGES_SLIDE)
}

export const imagesApiHelper = {
  getImageSlide,
}
