import { isUserNameValid, userNameError } from './vo'

export interface CreateUserInterface {
  name: string
  id: number
  lastname: string
  address: string
}

export function ensureUserIsValid({ name, id }: CreateUserInterface) {
  if (!isUserNameValid(name)) {
    throw userNameError(name)
  }
}
