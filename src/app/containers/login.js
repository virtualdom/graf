import { connect } from 'react-redux';

import Login from '../components/login.jsx';
import { add, get } from '../actions/users';

module.exports = connect(
  function mapStateToProps (state) {
    return {
      username: state.get('username'),
      authorization: state.get('authHeader'),
      error: state.get('loginError')
    };
  },
  function mapDispatchToProps (dispatch) {
    return {
      login: (creds) => dispatch(get(creds)),
      signup: (creds) => dispatch(add(creds))
    };
  }
)(Login);
