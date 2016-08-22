import React from 'react';
import { hashHistory } from 'react-router';

import { Card, CardMedia } from 'material-ui/Card';
import ThemeProvider from 'material-ui/styles/MuiThemeProvider';

import CheckInButtons from '../containers/check-in-buttons';
import Checkmarks from '../containers/checkmarks';
import Inspiration from '../containers/inspiration';
import WorkoutChart from '../containers/workout-chart';

class Dashboard extends React.Component {
  render () {
    return (
      <div>
        <ThemeProvider>
          <Card>
            <Checkmarks />
            <CardMedia>
              <WorkoutChart />
            </CardMedia>
          </Card>
        </ThemeProvider>
        <br />
        <Inspiration />
        <CheckInButtons />
      </div>
    )
  }
}

module.exports = Dashboard;
