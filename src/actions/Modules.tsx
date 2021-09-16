import {
  MODULES_GET_MODULES,
  MODULES_GET_MODULES_SUCCESS,
  MODULES_GET_MODULES_FAILURE,
} from "../constant/actions/modules"
import { MenuOption } from "../constant/types/modules"


export type GetModulesAction = {
  type: typeof MODULES_GET_MODULES
}

export const getModules = (): GetModulesAction => {
  return {
    type: MODULES_GET_MODULES,
  }
}

export type GetModulesSuccessAction = {
  type: typeof MODULES_GET_MODULES_SUCCESS,
  data: MenuOption[]
}

export const getModulesSuccess = (  data: MenuOption[]): GetModulesSuccessAction => {
  return {
    type: MODULES_GET_MODULES_SUCCESS,data
  }
}

export type GetModulesFailureAction = {
  type: typeof MODULES_GET_MODULES_FAILURE
}

export const getModulesFailure = (): GetModulesFailureAction => {
  return {
    type: MODULES_GET_MODULES_FAILURE,
  }
}

export type ModulesActions =
  | GetModulesAction
  | GetModulesSuccessAction
  | GetModulesFailureAction
