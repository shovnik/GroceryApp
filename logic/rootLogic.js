import { createLogicMiddleware } from 'redux-logic';
import register from './register';
import login from './login';
import logout from './logout';
import fetch from './fetch';
import _delete from './delete';
import save from './save';

export default createLogicMiddleware([
  register,
  login,
  logout,
  fetch,
  _delete,
  save
]);
