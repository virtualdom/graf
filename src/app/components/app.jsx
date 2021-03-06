import React from 'react';
import {
  Router,
  Route,
  hashHistory,
  IndexRoute
} from 'react-router';

import Login from '../containers/login';
import PageContainer from '../containers/page-container';

import Dashboard from './dashboard.jsx';
import ErrorPage from './error-page.jsx';
import Groups from './groups.jsx';

class App extends React.Component {
  render () {
    return (
      <Router history={ hashHistory }>
        <Route path='/' component={ PageContainer } >
          <IndexRoute component={ Dashboard } />
          <Route path='groups' component={ Groups } />
          <Route path='*' component={ ErrorPage } />
        </Route>
      </Router>
    );
  }
}


module.exports = App;
