const NAME_MAX_LENGHT = 10

export function isUserNameValid(name: string): boolean {
  return name.length > NAME_MAX_LENGHT
}

export function userNameError(name: string): Error {
  if (name === '' || !name) throw new Error('Name not provided.')
  throw new Error(`The name (${name}) provided is not valid.`)
}
