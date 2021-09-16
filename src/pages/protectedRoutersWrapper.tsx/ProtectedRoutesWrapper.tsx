import {
  LoginOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,

  UserOutlined
} from '@ant-design/icons'
import React, { ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { getModules } from '../../actions/Modules'
import {
  Copyright,
  CustomButton,
  CustomCol,
  CustomContent,
  CustomDivider,
  CustomDropdown,
  CustomFooter,
  CustomHeader,
  CustomLayout,
  CustomMenu,
  CustomMenuItem,
  CustomRow,
  CustomSider,
  CustomText
} from '../../AntDComponents/index'
import LogoComponent from '../../components/LogoComponent'
import { PATH_LOGIN } from '../../constant/routes'
import { StoreState } from '../../constant/types/store'
import { getSessionInfo, isLoggedIn, removeSession } from '../../utils/session'
import DrawerOptions from './DrawerOptions'



const SiderHeaderContainer = styled.div`
  text-align: center;

  .logo {
    width: 100px;
  }

  .username {
    display: block;
    font-weight: bold;
  }
`

const HeaderTextContainer = styled(CustomText)`
  color: #fff;
  font-size: 20px;
`

type Props = {
  children: ReactElement[] | ReactElement
}

const ProtectedRoutesWrapper = (props: Props): ReactElement => {
  const dispatch = useDispatch()
  const {MODULES} = useSelector((state: StoreState) => state.modules)
  const [isCollapsed, setIsCollapsed] = React.useState(false)
  const handleDrawerToggle = () => {
    setIsCollapsed(!isCollapsed)
  }
  useEffect(() => {
    isLoggedIn() && dispatch(getModules())
  }, [ dispatch])


  if (!isLoggedIn()) {
    removeSession()

    return <Redirect to={PATH_LOGIN} />
  }
  const PerfilMenu = (
    <CustomMenu>
      <CustomMenuItem key="1" icon={<UserOutlined />}>
        Perfil
      </CustomMenuItem>
      <CustomMenuItem key="2" icon={<LoginOutlined />}>
        <span
          onClick={() => {
            removeSession()
            window.location.reload()
          }}
        >
          Cerrar sesión
        </span>
      </CustomMenuItem>
    </CustomMenu>
  )

  return (
    <CustomLayout>
      <CustomSider
        collapsed={isCollapsed}
        collapsedWidth={0}
        width={240}
        theme="light"
        className={'fixedContainer'}
        style={{
          overflow: 'auto',
          height: '100vh',
        }}
      >
        <SiderHeaderContainer>
          <LogoComponent  />
          <p className="username">{getSessionInfo().username}</p>
          <CustomDivider />
        </SiderHeaderContainer>
        <DrawerOptions userMenuOptions={MODULES} />
      </CustomSider>
      <CustomLayout>
        <CustomHeader
          style={{
            // TODO: These colors are not final. We should put app colors in a separate place.
            backgroundColor: '#3f51b5',
            width: '100%',
            color: '#fff',
            fontSize: '25px',
            padding: '0 15px',
            alignItems: 'center',
            position: 'relative',
            top: 0,
            zIndex: 1,
          }}
        >
          <CustomRow
            justify={'space-between'}
            style={{
              width: '100%',
            }}
          >
            <CustomCol xs={1}>
              {React.createElement(
                isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  onClick: handleDrawerToggle,
                  style: {
                    fontSize: '18px',
                    padding: '0 15px',
                    cursor: 'pointer',
                    textAlign: 'center',
                  },
                }
              )}
            </CustomCol>
            <CustomCol xs={21}>
              <HeaderTextContainer ellipsis={true}>
               Portal
              </HeaderTextContainer>
            </CustomCol>

            <CustomCol xs={1}  >
              <CustomDropdown overlay={PerfilMenu}>
                <CustomButton
                  type={'text'}
                  style={{
                    backgroundColor: '#3f51b5',
                    color: '#fff',
                    fontSize: '18px',
                    padding: '0 15px',
                    cursor: 'pointer',
                    margin: '5px',
                  }}
                >
                  <SettingOutlined />
                </CustomButton>
              </CustomDropdown>
            </CustomCol>
          </CustomRow>
        </CustomHeader>
        <CustomContent
          style={{
            padding: '15px',
            paddingTop: '10px',
            overflow: 'auto',
            height: '90vh',
          }}
        >
          {props.children}
          <CustomFooter style={{ textAlign: 'center' }}>
            <Copyright />
          </CustomFooter>
        </CustomContent>
      </CustomLayout>
    </CustomLayout>
  )
}

export default ProtectedRoutesWrapper
