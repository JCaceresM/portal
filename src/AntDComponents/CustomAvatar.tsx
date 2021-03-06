import React from 'react'
import { Avatar } from 'antd'
import { AvatarProps } from 'antd/lib/avatar'

const CustomAvatar: React.FunctionComponent<AvatarProps> = ({
  alt = '',
  onError = () => false,
  shape = 'circle',
  size = 'default',
  
  srcSet = '',
  ...props
}): React.ReactElement => (
  <Avatar
    alt={alt}
    onError={onError}
    shape={shape}
    size={size}
  
    srcSet={srcSet}
    {...props}
  >
    {props.children}
  </Avatar>
)

export default CustomAvatar
