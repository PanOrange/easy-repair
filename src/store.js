import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import Redusers from './reducers';

const middlewares = applyMiddleware(thunk, logger);

const store = createStore(Redusers, middlewares);

export default store;