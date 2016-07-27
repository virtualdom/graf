import React from 'react';

import {Card, CardMedia} from 'material-ui/Card';
import ThemeProvider from 'material-ui/styles/MuiThemeProvider';

import CheckInButtons from './check-in-buttons.jsx';
import Checkmarks from './checkmarks.jsx';
import Inspiration from './inspiration.jsx';
import WorkoutChart from './workout-chart.jsx';

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
