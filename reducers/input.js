import {
  CLEAR_INPUT,
  UPDATE_USERNAME,
  UPDATE_PASSWORD
} from '../actions/input'

export default function inputReducer(state = { username: '', password: ''}, { type, payload }) {
  switch (type) {
    case CLEAR_INPUT:
      return {
        username: '',
        password: ''
      };
    case UPDATE_USERNAME:
      return {
        ...state,
        username: payload
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        password: payload
      };
    default:
      return state;
  }
}
