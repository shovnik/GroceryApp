import {
  FETCH_LISTS_SUCCESS,
  UPDATE_DELETE_KEY,
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
      }
    default:
      return state;
  }
}
