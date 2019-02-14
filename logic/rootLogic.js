import { createLogicMiddleware } from 'redux-logic';
import register from './register';
import login from './login';
import fetch from './fetch';
import _delete from './delete';
import save from './save';

export default createLogicMiddleware([
  register,
  login,
  fetch,
  _delete,
  save
]);
