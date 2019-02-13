import { createLogicMiddleware } from 'redux-logic';
import register from './register';
import login from './login';
import save from './save';

export default createLogicMiddleware([
  register,
  login,
  save
]);
