import type { CreateUserInterface } from '.'
import type { User } from './User'

export interface UserRepository {
  getAll: () => Promise<User[]>
  create: (user: CreateUserInterface) => Promise<void>
}
