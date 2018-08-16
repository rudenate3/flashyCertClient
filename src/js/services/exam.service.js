import { Post } from './fetch.service'

export const createExam = async (data, token) => {
  return await Post('/exams', data, token)
}