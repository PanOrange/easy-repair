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
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="best" component={Best} />
        <Route path="contacts" component={Contacts} />
        <Route path="projects" component={Projects} />
        <Route path="query" component={Query} />
        <Route path="*" component={Error} />
    </Route>
);