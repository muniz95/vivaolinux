import { LOGIN, SET_USER } from '../constants'
import { combineReducers } from 'redux'

const defaultUser = {
  name: 'Guest'
}

const auth = (state = false, action) => {
  switch (action.type) {
    case LOGIN:
      return true;
    default:
      return state;
  }
}

const loggedUser = (state = defaultUser, action) => {
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