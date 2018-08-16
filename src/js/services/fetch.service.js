import { Config } from '../config/config'

const api = Config.api

export const Get = route => {}
export const Post = async (route, data, token) => {
  
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(data)
  }

  if(token) requestOptions.headers.Authorization = token

  return await fetch(`${api}${route}`, requestOptions)
}
export const Patch = route => {}
export const Delete = route => {}


