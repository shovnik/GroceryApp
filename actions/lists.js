export const DELETE_LIST = 'lists:deleteList';
export const FETCH_LISTS = 'lists:fetchLists';
export const FETCH_LISTS_SUCCESS = 'lists:fetchListsSuccess';
export const SET_SORT = 'lists:setSort';

export const deleteList = id => ({
  type: DELETE_LIST,
  payload: id
});

export const fetchLists = () => ({
  type: FETCH_LISTS
});

export const fetchListsSuccess = lists => ({
  type: FETCH_LISTS_SUCCESS,
  payload: lists
});

export const setSort = sortCriteria => ({
  type: SET_SORT,
  payload: sortCriteria
});
