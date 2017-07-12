import userReducer from './userReducer';
import queryReducer from './queryReducer';
import orderReducer from './orderReducer';
import { routerReducer } from 'react-router-redux';

import { combineReducers } from 'redux';

export default combineReducers({
	user: userReducer,
	query: queryReducer,
	order: orderReducer,
	routing: routerReducer
});