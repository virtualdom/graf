import { Card, CardTitle, CardText, CardMedia } from 'material-ui/Card';
import React from 'react';
import ThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DatePickers from './date-pickers.jsx';
import GroupPicker from './group-picker.jsx';
import GroupTable from './group-table.jsx';

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
