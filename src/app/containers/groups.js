import { connect } from 'react-redux';

import Groups from '../components/groups.jsx';
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
)(Groups);
