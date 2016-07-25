import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class GroupTable extends React.Component {

  render () {
    return (
      <Table>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Username</TableHeaderColumn>
            <TableHeaderColumn>No. of Workouts</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} adjustForCheckbox={false}>
          <TableRow>
            <TableRowColumn>John Smith</TableRowColumn>
            <TableRowColumn>3</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Randal White</TableRowColumn>
            <TableRowColumn>3</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Stephanie Sanders</TableRowColumn>
            <TableRowColumn>3</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Steve Brown</TableRowColumn>
            <TableRowColumn>3</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}



module.exports = GroupTable;
