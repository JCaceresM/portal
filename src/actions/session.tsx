import {
  AUTH_LOGIN,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_SUCCESS,
} from "../constant/actions/session"
import { LogInType } from "../constant/types/session"

export type AuthLogInAction = {
  type: typeof AUTH_LOGIN
  parameters: LogInType
}

export const AuthLogIn = (parameters: LogInType): AuthLogInAction => {
  return {
    type: AUTH_LOGIN,
    parameters,
  }
}

export type AuthLogInSuccessAction = {
  type: typeof AUTH_LOGIN_SUCCESS
}

export const AuthLogInSuccess = (): AuthLogInSuccessAction => {
  return {
    type: AUTH_LOGIN_SUCCESS,
  }
}

export type AuthLogInFailureAction = {
  type: typeof AUTH_LOGIN_FAILURE
}

export const AuthLogInFailure = (): AuthLogInFailureAction => {
  return {
    type: AUTH_LOGIN_FAILURE,
  }
}

export type AuthLogInActions =
  | AuthLogInAction
  | AuthLogInSuccessAction
  | AuthLogInFailureAction
