import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//ref: https://material-ui.com/components/tables/

const useStyles = makeStyles(theme => ({
  root: {
    // width: '100%',
    marginBottom: theme.spacing(3),
  },
  tableHd: {
    color: '#116c78',
    fontFamily: 'inherit',
    fontSize: '15px',
    fontWeight: 'bold',
  },
  tableRi: {
    fontFamily: 'inherit'
  },
  a: {
    fontWeight: 'bold'
  }
  
}));

export default function SimpleTable(props) {
  const classes = useStyles();

  const rows = props.rowItems.map((rowItem) =>
    <TableRow key={rowItem.id}>
      <TableCell className={classes.tableRi} component="th" scope="row">
        {/* <b>{rowItem.discipline}</b> */}
        {rowItem.num ? <a href={["https://www.alsde.edu/sec/sct/COS/2015%20FINAL%20Science%20COS%2010-1-15.pdf" + rowItem.num]} target="_blank" rel="noopener noreferrer"><b>{rowItem.discipline}</b></a> : <a href="https://www.alsde.edu/sec/sct/COS/2015%20FINAL%20Science%20COS%2010-1-15.pdf" target="_blank" rel="noopener noreferrer"><b>{rowItem.discipline}</b></a>}
      </TableCell>
      <TableCell className={classes.tableRi}>{rowItem.standard}</TableCell>
      {/* <TableCell className={classes.tableRi}>
        {rowItem.num ? <a href={["https://www.alsde.edu/sec/sct/COS/2015%20FINAL%20Science%20COS%2010-1-15.pdf" + rowItem.num]} target="_blank" rel="noopener noreferrer">{rowItem.standard}</a> : <a href="https://www.alsde.edu/sec/sct/COS/2015%20FINAL%20Science%20COS%2010-1-15.pdf" target="_blank" rel="noopener noreferrer">{rowItem.standard}</a>}
      </TableCell> */}
    </TableRow>
  );

  return (
    <Paper className={[classes.root, props["PaperGrid"]].join(' ')}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHd}>Discipline <br className={classes.nn} /> (click for details)</TableCell>
            <TableCell className={classes.tableHd}>Standards Met</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows}
        </TableBody>
      </Table>
    </Paper>
  );
}



