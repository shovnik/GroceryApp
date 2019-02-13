import {
  FETCH_LISTS
} from '../actions/lists';

export default function listsReducer(state = { data: [] }, { type, payload }) {
  switch (type) {
    case FETCH_LISTS:
      return {
        ...state,
        data: payload
      };
    default:
      return state;
  }
}
