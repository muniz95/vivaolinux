import { LOGIN, SET_USER } from '../constants'

export const login = () => {
  const action = {
    type: LOGIN
  }
  return action
}

export const setUser = (payload) => {
  const action = {
    type: SET_USER,
    payload
  }
  return action
}