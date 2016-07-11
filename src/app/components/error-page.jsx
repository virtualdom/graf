const React = require('react');
const { Link } = require('react-router');

class ErrorPage extends React.Component {
  render () {
    return (
      <div>
        <h2>404 Page Not Found</h2>
        <p>
          Looks like somebody's lost.&nbsp;
          <Link to="/">Let's get you home.</Link>
        </p>
      </div>
    );
  }
}

module.exports = ErrorPage;
