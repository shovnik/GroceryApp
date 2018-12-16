export const ADD_ITEM = 'list:addItem';
export const CLEAR_LIST = 'list:clearList';
export const CREATE_LIST = 'list:createList';
export const FETCH_LIST = 'list:fetchList';
export const FETCH_LIST_SUCCESS = 'list:fetchListSuccess';
export const PUBLISH_LIST = 'list:publishList';
export const REMOVE_ITEM = 'list:removeItem';
export const SUBMIT_RECEIPT = 'list:submitReceipt';
export const TOGGLE_ITEM = 'list:toggleItem';

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});

export const clearList = () => ({
  type: CLEAR_LIST
});

export const createList = () => ({
  type: CREATE_LIST
});

export const fetchList = id => ({
  type: FETCH_LIST,
  payload: id
});

export const fetchListSuccess = list => ({
  type: FETCH_LIST_SUCCESS,
  payload: list
});

export const publishList = () => ({
  type: PUBLISH_LIST
});

export const removeItem = key => ({
  type: REMOVE_ITEM,
  payload: key
});

export const submitReceipt = receipt => ({
  type: SUBMIT_RECEIPT,
  payload: receipt
});

export const toggleItem = key => ({
  type: TOGGLE_ITEM,
  payload: key
});
