import React from 'react';

import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ThemeProvider from 'material-ui/styles/MuiThemeProvider';

const getLoginCreds = () => ({
  username: document.getElementById('username').value,
  password: document.getElementById('password').value
});

class Login extends React.Component {
  render () {
    const attemptLogin = () => this.props.login(getLoginCreds());
    const attemptSignup = () => this.props.signup(getLoginCreds());
    var loadOrErr;

    if (this.props.loading) {
      loadOrErr = (<CircularProgress size={0.5} />);
    } else {
      loadOrErr = (<p style={{color: 'red'}}>{this.props.error}</p>);
    }

    return (
      <ThemeProvider>
        <Card>
          <CardTitle title='Sign up' subtitle='or log in' />
          <CardText>
            <TextField
              id={'username'}
              style={{ margin: '0 5%'}}
              hintText={'Username'}
              underlineShow={false}
            />
            <Divider />
            <TextField
              id={'password'}
              style={{ margin: '0 5%'}}
              hintText={'Password'}
              type={'password'}
              underlineShow={false}
            />
            <br />
            {loadOrErr}
          </CardText>
          <CardActions>
            <RaisedButton label="Login" onClick={attemptLogin} primary={true} style={{margin: 12}} />
            <RaisedButton label="Sign Up" onClick={attemptSignup} backgroundColor={'#5CB85C'} labelColor={'#FFF'} style={{margin: 12}} />
          </CardActions>
        </Card>
      </ThemeProvider>
    );
  }
}

module.exports = Login;
