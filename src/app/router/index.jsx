import React from 'react';
import {
  Router,
  Route,
  hashHistory,
  IndexRoute
} from 'react-router';

import App from '../components/app.jsx';
import Dashboard from '../components/dashboard.jsx';
import Groups from '../components/groups.jsx';
import ErrorPage from '../components/error-page.jsx';

class RouterComponent extends React.Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Dashboard} />
          <Route path='groups' component={Groups}/>
          <Route path='*' component={ErrorPage}/>
        </Route>
      </Router>
    );
  }
}

module.exports = RouterComponent;
