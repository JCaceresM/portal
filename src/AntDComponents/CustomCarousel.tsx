import React from 'react'
import { Carousel  } from 'antd'
import {CarouselProps   } from 'antd/lib/carousel'

const CustomCarousel: React.FunctionComponent<CarouselProps> = ({
    children = <div/>,
  ...props
}): React.ReactElement => <Carousel {...props}>{children}</Carousel>

export default CustomCarousel
