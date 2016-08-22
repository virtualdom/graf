import { connect } from 'react-redux';

import PageContainer from '../components/page-container.jsx';
import { add } from '../actions/groups';
import { logout } from '../actions/users';

module.exports = connect(
  function mapStateToProps (state) {
    return {
      username: state.get('username'),
      authorization: state.get('authHeader')
    };
  },
  function mapDispatchToProps (dispatch) {
    return {
      addGroup: (newGroup) => dispatch(add(newGroup)),
      signOut: () => dispatch(logout())
    };
  }
)(PageContainer);
