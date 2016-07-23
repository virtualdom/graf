const React = require('react');
const injectTapEventPlugin = require('react-tap-event-plugin');
const { Link, hashHistory } = require('react-router');
const MaterialUI = require('material-ui');

const AppBar = MaterialUI.AppBar;
const IconButton = MaterialUI.IconButton;
const IconMenu = MaterialUI.IconMenu;
const MenuItem = MaterialUI.MenuItem;
const ThemeProvider = MaterialUI.MuiThemeProvider;

import Menu from 'material-ui/svg-icons/navigation/menu';

injectTapEventPlugin();

const menuRouteMap = {
  Dashboard: '',
  Groups: 'groups',
  'Sign Out': 'signout'
};

function navigate (event, menuItem) {
  hashHistory.push(menuRouteMap[menuItem.props.primaryText]);
}

class App extends React.Component {
  render () {
    return (
      <div>
        <ThemeProvider>
          <AppBar
          title="Graf"
          showMenuIconButton={false}
          iconElementRight={
            <IconMenu
              iconButtonElement={<IconButton><Menu /></IconButton>}
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              onItemTouchTap={navigate}
            >
              <MenuItem primaryText="Dashboard" />
              <MenuItem primaryText="Groups" />
              <MenuItem primaryText="Sign Out" />
            </IconMenu>
          }
          style={{backgroundColor: '#02A8F3'}}
        />
        </ThemeProvider>
        {this.props.children}
      </div>
    );
  }
}

module.exports = App;

