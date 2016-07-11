const React = require('react');
const {
  Router,
  Route,
  hashHistory,
  IndexRoute
} = require('react-router');

const App = require('../components/app.jsx');
const Dashboard = require('../components/dashboard.jsx');
const Groups = require('../components/groups.jsx');
const ErrorPage = require('../components/error-page.jsx');

class RouterComponent extends React.Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Dashboard} />
          <Route path="groups" component={Groups}/>
          <Route path="*" component={ErrorPage}/>
        </Route>
      </Router>
    );
  }
}

module.exports = RouterComponent;
