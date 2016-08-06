import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import React from 'react';

const style = { display: 'inline-block', width: '100%', fontSize: '2rem' };

class GroupPicker extends React.Component {
  render() {
    const MenuItems = this.props.groups.map((group) => <MenuItem value={group} primaryText={group} key={group} />);
    const selectedGroup = this.props.selectedGroup || this.props.groups[0];

    return (
      <DropDownMenu autoWidth={false} style={style} value={selectedGroup} onChange={this.props.changeSelectedGroup}>
        <MenuItem value={0} disabled={true} primaryText='Select a Group' />
        {MenuItems}
      </DropDownMenu>
    );
  }
}

module.exports = GroupPicker;
