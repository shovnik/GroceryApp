import {
  FETCH_LISTS_SUCCESS,
  SET_SORT
};

export default function listsReducer(state = { sortCriteria:'date', data: [] }, { type, payload }) {
  switch (type) {
    case FETCH_LISTS_SUCCESS:
      return {
        ...state,
        data: payload
      };
    case SET_SORT:
      return {
        ..state,
        sortCriteria: payload
      }
    default:
      return state;
  }
}
