import { ensureUserIsValid, type CreateUserInterface, type UserRepository } from '@/domain'

export async function createUser(
  userRepository: UserRepository,
  user: CreateUserInterface
): Promise<void> {
  ensureUserIsValid(user)

  return userRepository.create(user)
}
