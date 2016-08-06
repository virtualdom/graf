import Moment from 'moment';
import React from 'react';

import DatePicker from 'material-ui/DatePicker';

function dateFormatter (date) {
  return Moment(date).format('M/D/YY');
}

class DatePickers extends React.Component {
  render() {
    return (
      <div>
        <div style={{display: 'inline-block', width: '30%'}}>
          <small>Start Date</small>
          <br />
          <DatePicker
            hintText='Start Date'
            firstDayOfWeek={0}
            formatDate={dateFormatter}
            onChange={this.props.changeStartDate}
            value={this.props.startDate}
          />
        </div>
        <div style={{display: 'inline-block', width: '30%'}}>
          <small>End Date</small>
          <br />
          <DatePicker
            hintText='End Date'
            firstDayOfWeek={0}
            formatDate={dateFormatter}
            onChange={this.props.changeEndDate}
            value={this.props.endDate}
          />
        </div>
      </div>
    );
  }
}

module.exports = DatePickers;
