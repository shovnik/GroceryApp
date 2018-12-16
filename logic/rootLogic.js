import { createLogicMiddleware } from 'redux-logic';
import sampleLogic from './sample';

export default createLogicMiddleware([
  sampleLogic
]);
