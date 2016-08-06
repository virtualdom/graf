import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class GroupTable extends React.Component {

  render () {
    const members = Object.keys(this.props.group);
    const rows = members.map((member) => {
      return (
        <TableRow key={member}>
          <TableRowColumn>{member}</TableRowColumn>
          <TableRowColumn>{this.props.group[member]}</TableRowColumn>
        </TableRow>
      );
    });

    return (
      <Table>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Username</TableHeaderColumn>
            <TableHeaderColumn>No. of Workouts</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} adjustForCheckbox={false}>
          {rows}
        </TableBody>
      </Table>
    );
  }
}

module.exports = GroupTable;
