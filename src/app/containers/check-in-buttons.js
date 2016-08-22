import { connect } from 'react-redux';

import CheckInButtons from '../components/check-in-buttons.jsx';
import { checkIn, uncheckIn } from '../actions/workouts';

module.exports = connect(
  function mapStateToProps (state) {
    return {};
  },
  function mapDispatchToProps (dispatch) {
    return {
      add: () => dispatch(checkIn()),
      remove: () => dispatch(uncheckIn())
    };
  }
)(CheckInButtons);
