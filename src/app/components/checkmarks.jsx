import Count from 'number-to-words';
import React from 'react';

import { CardTitle, CardText } from 'material-ui/Card';
import CheckMark from 'material-ui/svg-icons/action/done';

const range = (number) => [...Array(Math.round(number)).keys()];

class Checkmarks extends React.Component {
  render() {
    let checkmarks = range(this.props.workouts || 0)
    .map((idx) => (<CheckMark className={'checkmark'} color={'#5CB85C'} key={idx}/>));

    if (!checkmarks.length)
      checkmarks = <span>&nbsp;</span>;

    return (
      <div>
        <CardTitle title={`${Count.toWords(this.props.workouts || 0)} ${ this.props.workouts === 1 ? 'workout' : 'workouts' } this week`} />
        <CardText>
          {checkmarks}
        </CardText>
      </div>
    );
  }
}

module.exports = Checkmarks;
