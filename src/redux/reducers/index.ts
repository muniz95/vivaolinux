import { LOGIN, SET_USER } from '../constants'
import { combineReducers } from 'redux'

const defaultUser = {
  name: 'Guest'
}

interface IAction {
  payload: any;
  type: string;
}

const auth = (state = false, action: IAction) => {
  switch (action.type) {
    case LOGIN:
      return true;
    default:
      return state;
  }
}

const loggedUser = (state = defaultUser, action: IAction) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  auth,
  loggedUser
})