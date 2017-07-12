import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import './index.css';

import store from './store';

import { syncHistoryWithStore } from 'react-router-redux';
const history = syncHistoryWithStore(browserHistory, store);

import { ROUTES } from './constants';

ReactDOM.render(
   <Provider store={store}>
       <Router history={history}>
           {ROUTES}
       </Router>
   </Provider>,
   document.getElementById('root')
);
