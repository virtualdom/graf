import React from 'react';

import { CardTitle, CardText } from 'material-ui/Card';
import CheckMark from 'material-ui/svg-icons/action/done';

class Checkmarks extends React.Component {
  render() {
    return (
      <div>
        <CardTitle title='Four workouts this week' />
        <CardText>
          <CheckMark className={'checkmark'} color={'#5CB85C'} />
          <CheckMark className={'checkmark'} color={'#5CB85C'} />
          <CheckMark className={'checkmark'} color={'#5CB85C'} />
          <CheckMark className={'checkmark'} color={'#5CB85C'} />
        </CardText>
      </div>
    );
  }
}

module.exports = Checkmarks;
