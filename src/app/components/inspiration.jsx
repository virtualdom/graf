import React from 'react';

import {Card, CardTitle} from 'material-ui/Card';
import ThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Inspiration extends React.Component {
  render () {
    return (
      <ThemeProvider>
        <Card>
          <CardTitle title={'"If at first you don\'t succeed, eat some ice cream!"'} subtitle={'- Dom'} />
        </Card>
      </ThemeProvider>
    )
  }
}

module.exports = Inspiration;
