import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import React from 'react';

class GroupPicker extends React.Component {
  render() {
    return (
      <DropDownMenu autoWidth={false} style={{display: 'inline-block', width: '100%', fontSize: '2rem'}} value={1} onChange={this.handleChange}>
        <MenuItem value={0} disabled={true} primaryText='Select a Group' />
        <MenuItem value={1} primaryText='RHN Group' />
        <MenuItem value={2} primaryText='Other Group 1' />
        <MenuItem value={3} primaryText='Other Group 2' />
        <MenuItem value={4} primaryText='Other Group 3' />
        <MenuItem value={5} primaryText='Other Group 4' />
      </DropDownMenu>
    );
  }
}

module.exports = GroupPicker;
