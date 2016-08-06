import { connect } from 'react-redux';

import PageContainer from '../components/page-container.jsx';
import { add } from '../actions/groups';

module.exports = connect(
  function mapStateToProps (state) {
    return {};
  },
  function mapDispatchToProps (dispatch) {
    return {
      addGroup: (newGroup) => dispatch(add(newGroup))
    };
  }
)(PageContainer);
