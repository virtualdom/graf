import Moment from 'moment';
import React from 'react';

import DatePicker from 'material-ui/DatePicker';

function dateFormatter (date) {
  return Moment(date).format('MMMM DD, YYYY');
}

class DatePickers extends React.Component {
  render() {
    return (
      <div>
        <div style={{display: 'inline-block', width: '30%'}}>
          <small>Start Date</small>
          <br />
          <DatePicker hintText='Start Date' formatDate={dateFormatter}/>
        </div>
        <div style={{display: 'inline-block', width: '30%'}}>
          <small>End Date</small>
          <br />
          <DatePicker hintText='End Date' formatDate={dateFormatter}/>
        </div>
      </div>
    );
  }
}

module.exports = DatePickers;
