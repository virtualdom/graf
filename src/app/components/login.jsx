import React from 'react';
import { hashHistory } from 'react-router';

import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
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
    if (this.props.username && this.props.authorization) {
      hashHistory.push('/');
    }

    const attemptLogin = () => {
      const creds = getLoginCreds();
      this.props.login(creds);
    };

    const attemptSignup = () => {
      const creds = getLoginCreds();
      this.props.signup(creds);
    };

    return (
      <div>
        <ThemeProvider>
          <AppBar
            title='Graf'
            showMenuIconButton={false}
            iconElementRight={null}
            style={{backgroundColor: '#02A8F3'}}
          />
        </ThemeProvider>
        <div className={'pageContents'}>
          <ThemeProvider>
            <Card>
              <CardTitle title='Sign up' subtitle='or log in' />
              <CardText>
                <TextField
                  id={'username'}
                  style={{ margin: '0 5%'}}
                  hintText='Username'
                  underlineShow={false}
                />
                <Divider />
                <TextField
                  id={'password'}
                  style={{ margin: '0 5%'}}
                  hintText='Password'
                  type='password'
                  underlineShow={false}
                />
                <br />
                <p style={{color: 'red'}}>{this.props.error}</p>
              </CardText>
              <CardActions>
                <RaisedButton label="Login" onClick={attemptLogin} primary={true} style={{margin: 12}} />
                <RaisedButton label="Sign Up" onClick={attemptSignup} backgroundColor={'#5CB85C'} labelColor={'#FFF'} style={{margin: 12}} />
              </CardActions>
            </Card>
          </ThemeProvider>
        </div>
      </div>
    );
  }
}

module.exports = Login;
