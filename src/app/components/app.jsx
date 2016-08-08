import React from 'react';
import {
  Router,
  Route,
  hashHistory,
  IndexRoute
} from 'react-router';

import Dashboard from '../containers/dashboard';
import Groups from '../containers/groups';
import Login from '../containers/login';
import PageContainer from '../containers/page-container';

import ErrorPage from './error-page.jsx';

class App extends React.Component {
  render () {
    return (
      <Router history={ hashHistory }>
        <Route path='login' component={ Login } />
        <Route path='/' component={ PageContainer }>
          <IndexRoute component={ Dashboard } />
          <Route path='groups' component={ Groups } />
          <Route path='*' component={ ErrorPage } />
        </Route>
      </Router>
    );
  }
}

module.exports = App;
