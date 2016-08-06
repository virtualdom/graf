import { connect } from 'react-redux';

import GroupPicker from '../components/group-picker.jsx';
import { change } from '../actions/groups';

module.exports = connect(
  function mapStateToProps (state) {
    return {
      selectedGroup: state.get('selectedGroup'),
      groups: Object.keys(state.get('groupTable').toJS())
    };
  },
  function mapDispatchToProps (dispatch) {
    return {
      changeSelectedGroup: (_1, _2, newGroup) => dispatch(change(newGroup))
    };
  }
)(GroupPicker);
