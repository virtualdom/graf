import React from 'react';

import ThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Plus from 'material-ui/svg-icons/content/add';
import Minus from 'material-ui/svg-icons/content/remove';

class CheckInButtons extends React.Component {
  render() {

    const { add, remove } = this.props;

    return (
      <div className={'floatButtons'}>
        <ThemeProvider>
          <FloatingActionButton className={'floatButton'} backgroundColor={'#5CB85C'} onClick={add}>
            <Plus />
          </FloatingActionButton>
        </ThemeProvider>
        <ThemeProvider>
          <FloatingActionButton className={'floatButton'} backgroundColor={'#D9534F'} onClick={remove}>
            <Minus />
          </FloatingActionButton>
        </ThemeProvider>
      </div>
    );
  }
}

module.exports = CheckInButtons;
