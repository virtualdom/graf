import { Card, CardTitle, CardText, CardMedia } from 'material-ui/Card';
import React from 'react';
import { hashHistory } from 'react-router';
import ThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DatePickers from '../containers/date-pickers';
import GroupPicker from '../containers/group-picker';
import GroupTable from '../containers/group-table';

class Groups extends React.Component {
  render () {
    return (
      <div>
        <ThemeProvider>
          <Card>
            <CardTitle title={<GroupPicker />} />
            <CardText>
              <DatePickers />
            </CardText>
            <CardMedia>
              <GroupTable />
            </CardMedia>
          </Card>
        </ThemeProvider>
      </div>
    );
  }
}

module.exports = Groups;
