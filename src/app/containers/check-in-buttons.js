import { connect } from 'react-redux';

import CheckInButtons from '../components/check-in-buttons.jsx';
import { add, remove } from '../actions/workouts';

module.exports = connect(
  function mapStateToProps (state) {
    return {};
  },
  function mapDispatchToProps (dispatch) {
    return {
      add: () => dispatch(add()),
      remove: () => dispatch(remove())
    };
  }
)(CheckInButtons);
