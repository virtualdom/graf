import { connect } from 'react-redux';

import Login from '../components/login.jsx';
import { signup, login } from '../actions/users';

module.exports = connect(
  function mapStateToProps (state) {
    return {
      username: state.get('username'),
      authorization: state.get('authHeader'),
      loading: state.get('loading'),
      error: state.get('loginError')
    };
  },
  function mapDispatchToProps (dispatch) {
    return {
      login: (creds) => dispatch(login(creds)),
      signup: (creds) => dispatch(signup(creds))
    };
  }
)(Login);
