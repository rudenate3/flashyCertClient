import { Config } from '../config/config'

const api = Config.api

export const Get = async (route, token) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    }
  }
  if(token) requestOptions.headers.Authorization = token

  return await fetch(`${api}${route}`, requestOptions)
}

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

export const Patch = async (route, data, token) => {

  const requestOptions = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    }
  }
  if(token) requestOptions.headers.Authorization = token

  return await fetch(`${api}${route}`, requestOptions)
}

export const Delete = async (route, token) => {

  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    }
  }
  if(token) requestOptions.headers.Authorization = token

  return await fetch(`${api}${route}`, requestOptions)
}


