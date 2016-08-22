import React from 'react';

import { Card, CardTitle } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import ThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Inspiration extends React.Component {
  render () {
    const quote = this.props.loading ? (<CircularProgress />) : (<CardTitle title={this.props.dailyQuote.quote} subtitle={`- ${this.props.dailyQuote.author}`} />);

    return (
      <ThemeProvider>
        <Card>
          {quote}
        </Card>
      </ThemeProvider>
    )
  }
}

module.exports = Inspiration;
