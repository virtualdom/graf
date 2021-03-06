import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { hashHistory } from 'react-router';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Menu from 'material-ui/svg-icons/navigation/menu';
import MenuItem from 'material-ui/MenuItem';
import ThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Login from '../containers/login'

injectTapEventPlugin();

class PageContainer extends React.Component {
  render () {
    const loggedIn = this.props.username && this.props.authorization;
    const iconMenu = (<IconMenu
      iconButtonElement={<IconButton><Menu /></IconButton>}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      onItemTouchTap={navigate}
    >
      <MenuItem primaryText='Dashboard' />
      <MenuItem primaryText='Groups' />
      <MenuItem primaryText='Join Group' />
      <MenuItem primaryText='Sign Out' />
    </IconMenu>);

    const iconElementRight = !loggedIn ? null : iconMenu;
    const children = loggedIn ? this.props.children : <Login />;

    const joinGroup = () => {
      const groupName = prompt('What shall the new group be named?');
      if (groupName && groupName.trim()) {
        return this.props.addGroup(groupName);
      }
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
        link: false,
        action: this.props.signOut
      }
    };

    function navigate (event, menuItem) {
      if (menuRouteMap[menuItem.props.primaryText].link) {
        hashHistory.push(menuRouteMap[menuItem.props.primaryText].route);
      } else {
        menuRouteMap[menuItem.props.primaryText].action();
      }
    }

    return (
      <div>
        <ThemeProvider>
          <AppBar
          title='Graf'
          showMenuIconButton={false}
          iconElementRight={iconElementRight}
          style={{backgroundColor: '#02A8F3'}}
        />
        </ThemeProvider>
        <div className={'pageContents'}>
          {children}
        </div>
      </div>
    );
  }
}

module.exports = PageContainer;

