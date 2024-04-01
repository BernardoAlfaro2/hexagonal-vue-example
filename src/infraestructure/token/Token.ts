export function getToken(): string | undefined {
  return (localStorage.getItem('token') as string) ?? undefined
}

export function isAuthenticated(): boolean {
  return !!localStorage.getItem('token')
}
