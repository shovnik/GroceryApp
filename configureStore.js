import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import rootLogic from './logic/rootLogic';

const middleware = applyMiddleware(rootLogic);

export default createStore(rootReducer, middleware);
