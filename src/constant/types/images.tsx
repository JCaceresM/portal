type ImageType = {
  id: 1
  name: string
  alternativeText: string
  caption: string
  width: string
  height: string
  formats: {
    thumbnail: {
      ext: string
      url: string
      hash: string
      mime: string
      name: string
      path: string
      size: number
      width: number
      height: number
    }
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string
  provider: string
  provider_metadata: any
  created_at: string
  updated_at: string
}
type imageSlideType = {
  id: number
  DESCRIPCION: string
  published_at: string
  created_at: string
  updated_at: string
  IMAGEN: ImageType[]
}
type ImagesState = {
  imageSlide: imageSlideType[]
  imageSlideFetching: boolean
}

const initialState = {
  imageSlide: new Array<imageSlideType>(),
  imageSlideFetching: false,
}

export { initialState }

export type { ImagesState, ImageType, imageSlideType }
