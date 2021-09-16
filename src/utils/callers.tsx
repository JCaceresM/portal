import axios, { AxiosResponse } from "axios"
import { RequestHeaders } from "../constant/types/general"
import { getSessionToken } from "./session"


const getResponseParams = (): RequestHeaders => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getSessionToken()}`,
    },
  }
}

 function postRequest<T>(
  url: string,
  data: object
): Promise<AxiosResponse<T>> {
  const config = getResponseParams()
  const result = axios.post(url, data, config)

  return result
}

function putRequest<T>(url: string, data: object): Promise<AxiosResponse<T>> {
  const config = getResponseParams()
  const result = axios.put(url, data, config)

  return result
}

function unauthorizedPostRequest<T>(
  url: string,
  data: T
): Promise<AxiosResponse<T>> {
  console.log(url);

  return axios.post(url, data,)
}

function getRequest<T>(url: string): Promise<AxiosResponse<T>> {
  const config = getResponseParams()
  console.log(url,config)

  return axios.get(url, config)
}

export  {
  putRequest,
  unauthorizedPostRequest,
  getRequest,
  postRequest,
  
}

