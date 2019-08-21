import { LOGIN, SET_USER } from "../constants"

export const login = () => {
  const action = {
    type: LOGIN,
  };
  return action;
};

export const setUser = (payload: any) => {
  const action = {
    payload,
    type: SET_USER,
  };
  return action;
};