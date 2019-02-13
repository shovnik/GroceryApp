export const FETCH_LISTS = 'lists:fetchLists';
export const DELETE_LIST = 'lists:deleteList';

export const deleteList = id => ({
  type: DELETE_LIST,
  payload: id
});

export const fetchLists = () => ({
  type: FETCH_LISTS,
  payload: lists
});
