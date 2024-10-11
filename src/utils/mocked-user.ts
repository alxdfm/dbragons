const mockEmail = 'teste@mail.com'
const mockPassword = '12345678'

export const checkMockedUser = (email: string, password:string) => {
  if (mockEmail === email && mockPassword === password) {
    return true
  }
}