import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Link, hashHistory } from 'react-router';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Menu from 'material-ui/svg-icons/navigation/menu';
import MenuItem from 'material-ui/MenuItem';
import ThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

class PageContainer extends React.Component {
  render () {
    const joinGroup = () => {
      return this.props.addGroup(prompt('What shall the new group be named?'));
    };

    const menuRouteMap = {
      Dashboard: {
        link: true,
        route: ''
      },
      Groups: {
        link: true,
        route: 'groups'
      },
      'Join Group': {
        link: false,
        action: joinGroup
      },
      'Sign Out': {
        link: true,
        route: 'signout'
      }
    };

    function navigate (event, menuItem) {
      if (menuRouteMap[menuItem.props.primaryText].link)
        hashHistory.push(menuRouteMap[menuItem.props.primaryText].route);
      else menuRouteMap[menuItem.props.primaryText].action();
    }

    return (
      <div>
        <ThemeProvider>
          <AppBar
          title='Graf'
          showMenuIconButton={false}
          iconElementRight={
            <IconMenu
              iconButtonElement={<IconButton><Menu /></IconButton>}
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              onItemTouchTap={navigate}
            >
              <MenuItem primaryText='Dashboard' />
              <MenuItem primaryText='Groups' />
              <MenuItem primaryText='Join Group' />
              <MenuItem primaryText='Sign Out' />
            </IconMenu>
          }
          style={{backgroundColor: '#02A8F3'}}
        />
        </ThemeProvider>
        <div className={'pageContents'}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

module.exports = PageContainer;

