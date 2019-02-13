import {
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  CLEAR_INPUT
} from '../actions/input'

export default function inputReducer(state = { email: '', password: ''}, { type, payload }) {
  switch (type) {
    case UPDATE_EMAIL:
      return {
        ...state,
        email: payload
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        password: payload
      };
    case CLEAR_INPUT:
      return {
        email: '',
        password: ''
      };
    default:
      return state;
  }
}
