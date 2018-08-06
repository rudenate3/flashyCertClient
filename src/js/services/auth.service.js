import { Post } from './fetch.service'

export const Register = async data => {
  const response = await Post('/register', data)
  const responseBody = await response.json()
  return responseBody
}

export const Login = async data => {
  const response = await Post('/login', data)
  const responseBody = await response.json()
  return responseBody
}
