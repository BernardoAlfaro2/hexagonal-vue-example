import axios, { type AxiosRequestConfig } from 'axios'
import type { RequestParamsInterface } from './RequestParams.interface'
import { getToken } from '../token'

const token = getToken()

const axiosInstance = axios.create({
  baseURL: 'https://bffb7b7ee0ac440b9a592f5731fc0b58.api.mockbin.io/'
})

async function get<T>(params: RequestParamsInterface) {
  const { payload, url, tokenRequired } = params
  let options: AxiosRequestConfig = {}

  if (tokenRequired) {
    options.headers = { Authorization: token }
  }

  return axiosInstance.get<T>(url, { ...options, params: payload })
}

async function post<T>(params: RequestParamsInterface) {
  const { tokenRequired, payload, url } = params

  let options: AxiosRequestConfig = {}

  if (tokenRequired) {
    options.headers = { Authorization: token }
  }

  return axiosInstance.post<T>(url, payload, options)
}

export const ApiService = { get, post }
