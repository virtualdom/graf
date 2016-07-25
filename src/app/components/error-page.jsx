import React from 'react';
import { Link } from 'react-router';
import RemoveCircle from 'material-ui/svg-icons/content/remove-circle';
import ThemeProvider from 'material-ui/styles/MuiThemeProvider';


class ErrorPage extends React.Component {
  render () {
    return (
      <div className={'errorPage'}>
        <ThemeProvider>
          <RemoveCircle style={{color: 'red', height: '100px', width: '100px'}} />
        </ThemeProvider>
        <h2>404 Page Not Found</h2>
        <p>
          Looks like somebody's lost.&nbsp;
          <Link to='/'>Let's get you home.</Link>
        </p>
      </div>
    );
  }
}

module.exports = ErrorPage;
