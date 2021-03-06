import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import TableRowColumn from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    width: '49%',
    overflowX: 'auto',
    padding: '0px',
    margin: '0px',
    border: '0px',
    float: 'right'
  },
  table: {
    minWidth: 350,
  },
};

let id = 0;
function createData(description, category, amount) {
  id += 1;
  return { id, description, category, amount };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
];

function SimpleExpensesTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell align="right">Category</TableCell>
            {/* <TableCell align="right">Quantity</TableCell> */}
            <TableCell align="right">Amount</TableCell>
            {/* <TableCell align="right">Protein (g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => (
            <TableRow key={n.id}>
              <TableCell component="th" scope="row">
                {n.description}
              </TableCell>
              <TableCell align="right">{n.category}</TableCell>
              {/* <TableCell align="right">{n.quantity}</TableCell> */}
              <TableCell align="right">{n.amount}</TableCell>
              {/* <TableCell align="right">{n.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleExpensesTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpensesTable);