import {
  FETCH_LISTS_SUCCESS,
  UPDATE_DELETE_KEY,
  CLEAR_LIST
} from '../actions/lists';

export default function listsReducer(state = { data: {}, deleteKey: '' }, { type, payload }) {
  switch (type) {
    case FETCH_LISTS_SUCCESS:
      return {
        ...state,
        data: payload
      };
    case UPDATE_DELETE_KEY:
      return {
        ...state,
        deleteKey: payload
      };
    case CLEAR_LIST:
      return {
        data: {},
        deleteKey: ''
      };
    default:
      return state;
  }
}
