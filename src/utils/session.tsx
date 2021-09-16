import Cookies from 'js-cookie'
import { COOKIE_KEY_SESSION_TOKEN, COOKIE_KEY_USER_DATA } from '../constant/actions/session'
import { UserSessionType, UserType } from '../constant/types/session'



export const isLoggedIn = (): boolean => {
  const requiredCookiesKeys = [COOKIE_KEY_SESSION_TOKEN, COOKIE_KEY_USER_DATA]

  return !requiredCookiesKeys.some(
    (cookieKey) => Cookies.get(cookieKey) === undefined
  )
}



export const createSession = (userData: UserSessionType): void => {
  const { jwt, user } = userData
  const sessionInfo = JSON.stringify({
    ...user
  })
  console.log(sessionInfo);
  
  Cookies.set(COOKIE_KEY_USER_DATA, sessionInfo, )

  Cookies.set(COOKIE_KEY_SESSION_TOKEN, jwt, )
}

export const removeSession = (): void => {
  const requiredCookiesKeys = [COOKIE_KEY_SESSION_TOKEN, COOKIE_KEY_USER_DATA]

  requiredCookiesKeys.forEach((cookieKey) => Cookies.remove(cookieKey))
}

export const getSessionInfo = (): UserType => {
  console.log(Cookies.getJSON(COOKIE_KEY_USER_DATA));
  
  return isLoggedIn() ? Cookies.getJSON(COOKIE_KEY_USER_DATA) : {}
}

export const getSessionToken = (): string => {
  return Cookies.get(COOKIE_KEY_SESSION_TOKEN) || ''
}
