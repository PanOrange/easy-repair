import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/App';
import About from '../containers/pages/About';
import Best from '../containers/pages/Best';
import Contacts from '../containers/pages/Contacts';
import Error from '../containers/pages/Error';
import Home from '../containers/pages/Home';
import Projects from '../containers/pages/Projects';
import Query from '../containers/pages/Query';

export const ROUTES = (
    <Route path={process.env.PUBLIC_URL + "/"} component={App}>
        <IndexRoute component={Home} />
        <Route path={process.env.PUBLIC_URL + "about"} component={About} />
        <Route path={process.env.PUBLIC_URL + "best"} component={Best} />
        <Route path={process.env.PUBLIC_URL + "contacts"} component={Contacts} />
        <Route path={process.env.PUBLIC_URL + "projects"} component={Projects} />
        <Route path={process.env.PUBLIC_URL + "query"} component={Query} />
        <Route path={process.env.PUBLIC_URL + "*"} component={Error} />
    </Route>
);