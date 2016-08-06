import { connect } from 'react-redux';

import DatePickers from '../components/date-pickers.jsx';
import { changeStartDate, changeEndDate } from '../actions/date-pickers';

module.exports = connect(
  function mapStateToProps (state) {
    return {
      startDate: state.get('startDate'),
      endDate: state.get('endDate')
    };
  },
  function mapDispatchToProps (dispatch) {
    return {
      changeStartDate: (_, newDate) => dispatch(changeStartDate(newDate)),
      changeEndDate: (_, newDate) => dispatch(changeEndDate(newDate))
    };
  }
)(DatePickers);
