import React from 'react';

import { Card, CardMedia } from 'material-ui/Card';
import ThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Inspiration from './inspiration.jsx';

import CheckInButtons from '../containers/check-in-buttons';
import Checkmarks from '../containers/checkmarks';
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
