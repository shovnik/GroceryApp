import {
  LOGGED_IN,
  LOGGED_OUT
} from '../actions/user'

export default function userReducer(state = { loggedIn: false, uid: null, email: '', username: '' }, { type, payload }) {
  switch (type) {
    case LOGGED_IN:
      return {
        loggedIn: true,
        ...payload
      };
    case LOGGED_OUT:
      return {
        loggedIn: false,
        uid: null,
        username: '',
        email: ''
      };
    default:
      return state;
  }
}
