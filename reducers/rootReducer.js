import { combineReducers } from 'redux';
import inputReducer from './input';
import listReducer from './list';
import listsReducer from './lists';
import userReducer from './user';

export default combineReducers({
  input: inputReducer,
  list: listReducer,
  lists: listsReducer,
  user: userReducer
});
