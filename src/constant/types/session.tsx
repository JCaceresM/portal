import { ImageType } from "./images"

type UserSessionType = {
  jwt: string
  user: UserType
}
type UserType = {
  id: 2
  username: string
  email: string
  provider: string
  confirmed: boolean
  blocked: boolean
  role: {
    id: number
    name: string
    description: string
    type: string
  }
  created_at: string
  updated_at: string
  image: ImageType
  pdf:any
}

type LogInType = {
  identifier: string
  password: string
}

type LoginState = {
  login: any
  logInFetching: boolean
}

const initialState = {
  login: "",
  logInFetching: false,
}

export { initialState }

export type { LoginState, LogInType, UserType, UserSessionType }
