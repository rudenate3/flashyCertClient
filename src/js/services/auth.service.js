import { Post } from './fetch.service'

export const Register = async data => {
  const response = await Post('/register', data)
}
