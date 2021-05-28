import { AxiosResponse } from 'axios'
import {  WEB_SERVICE_API_MODULES_GET_MODULES } from '../../constant/routes'
import { MenuOption } from '../../constant/types/modules'
import { getRequest,   } from '../../utils/callers'
const getModules = (
  ): Promise<AxiosResponse<MenuOption>> => {
    return getRequest<MenuOption>(
      WEB_SERVICE_API_MODULES_GET_MODULES,
      
    )
  }

  export const modulesApiHelper={
    getModules
  }