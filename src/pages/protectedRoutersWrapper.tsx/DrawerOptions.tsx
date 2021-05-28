import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'
import {
  CustomMenu,
  CustomMenuItem,
  CustomSubMenu,
  CustomTooltip
} from '../../AntDComponents'
import { MenuOption } from '../../constant/types/modules'



let history

const getMenuItems = (userOptions: MenuOption[]) => {
  return userOptions.map((route: MenuOption) => {
    return route.CHILDREN && route.CHILDREN.length ? (
      <CustomSubMenu key={route.ID_MODULE} title={route.NAME}>
        {getMenuItems(route.CHILDREN)}
      </CustomSubMenu>
    ) : (
      <CustomMenuItem
        key={route.ID_MODULE}
        onClick={() => {
          if (route.MODULE_PATH) {
            history?.push(route.MODULE_PATH, { activityId: route.ID_MODULE })
          }
        }}
      >
        <CustomTooltip title={route.NAME}>{route.NAME}</CustomTooltip>
      </CustomMenuItem>
    )
  })
}

type Props = {
  userMenuOptions: MenuOption[]
}

const DrawerOptions = (props: Props): ReactElement => {
  history = useHistory()
  return (
    <>
      
      <CustomMenu
        mode={'inline'}
        inlineIndent={10}
      >
        {getMenuItems(props.userMenuOptions)}
      </CustomMenu>
    </>
  )
}

export default DrawerOptions
