import { connect } from 'react-redux';

import Dashboard from '../components/dashboard.jsx';
import { clear } from '../actions/users';

module.exports = connect(
  function mapStateToProps (state) {
    return {
      username: state.get('username'),
      authorization: state.get('authHeader')
    };
  },
  function mapDispatchToProps (dispatch) {
    return {
      clear: () => dispatch(clear())
    };
  }
)(Dashboard);
