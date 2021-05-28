import React from 'react'
import { Avatar,  } from 'antd'
import { AvatarProps } from 'antd/lib/avatar'
import { CustomCol, CustomRow } from '../AntDComponents'
import { getSessionInfo } from '../utils/session'
import {  UserOutlined } from '@ant-design/icons'




const LogoComponent: React.FunctionComponent<AvatarProps> = ({
  
  
  ...props
}) => {
  
  const userImg = getSessionInfo().image

  
  return (
  <CustomRow justify={'center'}>
    <CustomCol xs={24} style={{margin:'12px'}}>
    <Avatar
      
      size={{ xs: 80, sm: 80, md: 80, lg: 80, xl: 80, xxl: 100 }}
      icon={<UserOutlined  />}
      src={`http://127.0.0.1:1337${userImg.url}`}
      {...props}
      
      
    />
    </CustomCol>
 
  </CustomRow>
)}

export default LogoComponent
