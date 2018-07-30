import { Config } from '../config/config'

const api = Config.api

export const Get = route => {}
export const Post = async (route, data) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(data)
  }

  return await fetch(`${api}${route}`, requestOptions)
}
export const Patch = route => {}
export const Delete = route => {}
