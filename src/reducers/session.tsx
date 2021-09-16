import { AuthLogInActions } from "../actions/session"
import {
    AUTH_LOGIN,
    AUTH_LOGIN_FAILURE,
    AUTH_LOGIN_SUCCESS,
  } from "../constant/actions/session"
import { initialState, LoginState } from "../constant/types/session"

 
  const login = (
    state: LoginState = initialState,
    action: AuthLogInActions
  ): LoginState => {
    switch (action.type) {
      case AUTH_LOGIN: {
          return {
              ...state,
              logInFetching: true,
          }
      }
      case AUTH_LOGIN_SUCCESS: {
          return {
              ...state,
              logInFetching: false,
          }
      }
      case AUTH_LOGIN_FAILURE: {
          return {
              ...state,
              logInFetching: false,
          }
      }
      default:
        return state
    }
  }
  
  export default login