import { connect } from 'react-redux';

import GroupTable from '../components/group-table.jsx';

module.exports = connect(
  function mapStateToProps (state) {
    return {
      group: state.get('groupTable').get(state.get('selectedGroup')) || {},
      loading: state.get('loading')
    };
  },
  function mapDispatchToProps (dispatch) {
    return {};
  }
)(GroupTable);
