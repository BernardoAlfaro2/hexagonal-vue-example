import type { CreateUserInterface, User, UserRepository } from '@/domain'
import { ApiService } from '../api/Api'
import { ErrorHandler } from '../errorHandler'
import type { AxiosError } from 'axios'
import { STATUS_CODES } from '../statusCodes'

export function CreateUserRepository(): UserRepository {
  return {
    getAll,
    create
  }
}

async function getAll(): Promise<User[]> {
  const users = await getAllFromApi()
  return users
}

async function create(params: CreateUserInterface): Promise<void> {
  try {
    await ApiService.post({ payload: params, url: 'create' })
  } catch (error) {
    throw ErrorHandler(error as unknown as AxiosError)
  } finally {
  }
}

async function getAllFromApi() {
  try {
    const { data, status, request } = await ApiService.get<User[]>({ url: 'users' })

    if (status !== STATUS_CODES.OK) {
      throw ErrorHandler(request)
    }

    return data
  } catch (error) {
    throw ErrorHandler(error as unknown as AxiosError)
  }
}
