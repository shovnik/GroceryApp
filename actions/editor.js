export const CREATE_LIST = 'editor:createList';
export const EDIT_LIST = 'editor:editList';
export const CLEAR_LIST = 'editor:clearList';
export const SAVE_LIST = 'editor:saveList';
export const SET_FILTER = 'editor:setFilter';
export const ADD_ITEM = 'editor:addItem';
export const REMOVE_ITEM = 'editor:removeItem';
export const TOGGLE_ITEM = 'editor:toggleItem';
export const UPDATE_COST = 'editor:updateCost';

export const createList = () => ({
  type: CREATE_LIST
});

export const editList = list => ({
  type: EDIT_LIST,
  payload: list
});

export const clearList = () => ({
  type: CLEAR_LIST
});

export const saveList = () => ({
  type: SAVE_LIST
});

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: filter
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  payload: id
});

export const toggleItem = id => ({
  type: TOGGLE_ITEM,
  payload: id
});

export const updateCost = cost => ({
  type: UPDATE_COST,
  payload: cost
});
