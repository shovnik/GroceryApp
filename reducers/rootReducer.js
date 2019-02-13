import { combineReducers } from 'redux';
import inputReducer from './input';
import editorReducer from './editor';
import listsReducer from './lists';
import userReducer from './user';

export default combineReducers({
  input: inputReducer,
  editor: editorReducer,
  lists: listsReducer,
  user: userReducer
});
