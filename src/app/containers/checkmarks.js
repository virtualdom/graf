import { connect } from 'react-redux';

import Checkmarks from '../components/checkmarks.jsx';

module.exports = connect(
  function mapStateToProps (state) {
    return { workouts: state.get('workouts') };
  },
  function mapDispatchToProps (dispatch) {
    return {};
  }
)(Checkmarks);
