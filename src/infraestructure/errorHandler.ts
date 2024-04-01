import { AxiosError } from 'axios'

const errorCodes: Record<number | string, string> = {
  400: 'Not found',
  default: 'Some Error Ocurred'
}

const setMessage = (code: number | string): string => {
  const message = errorCodes[code] ?? errorCodes.default
  return message
}

export const ErrorHandler = (error: AxiosError) => {
  const code = (error as AxiosError).response?.status!

  throw new Error(setMessage(code))
}
