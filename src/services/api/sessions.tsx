import { AxiosResponse } from 'axios'
import { WEB_SERVICE_API_LOGIN } from '../../constant/routes'
import { LogInType } from '../../constant/types/session'
import { unauthorizedPostRequest } from '../../utils/callers'
const authLogIn = (
    data: LogInType
  ): Promise<AxiosResponse<LogInType>> => {
    return unauthorizedPostRequest<LogInType>(
      WEB_SERVICE_API_LOGIN,
      data
    )
  }

  export const sessionApiHelper={
    authLogIn
  }