export const FETCH_LISTS = 'lists:fetchLists';
export const FETCH_LISTS_SUCCESS = 'lists:fetchListsSuccess';
export const DELETE_LIST = 'lists:deleteList';
export const UPDATE_DELETE_KEY = 'lists:updateDeleteKey';
export const CLEAR_LISTS = 'lists:clearLists';

export const fetchLists = () => ({
  type: FETCH_LISTS
});

export const fetchListsSuccess = lists => ({
  type: FETCH_LISTS_SUCCESS,
  payload: lists
});

export const deleteList = () => ({
  type: DELETE_LIST
});

export const updateDeleteKey = deleteKey => ({
  type: UPDATE_DELETE_KEY,
  payload: deleteKey
});

export const clearLists = () => ({
  type: CLEAR_LISTS
});
