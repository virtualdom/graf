import { connect } from 'react-redux';

import Checkmarks from '../components/workout-chart.jsx';

module.exports = connect(
  function mapStateToProps (state) {
    return { chartData: state.get('chartData').toJS() };
  },
  function mapDispatchToProps (dispatch) {
    return {};
  }
)(Checkmarks);
