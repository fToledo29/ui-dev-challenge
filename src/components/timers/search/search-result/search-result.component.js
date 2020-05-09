import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import TableFooter from '@material-ui/core/TableFooter';
import TablePaginationActions from './table-pagination-actions/table-pagination-actions.component';
import dataJSON from '../../../../assets/data/timers.json';  //'../../../../assets/data/timers.json';


// Utils
import * as shared from '../../../../shared/constants';

// function createData(name, code, population, size) {
	// 	const density = population / size;
	// 	return { name, code, population, size, density };
	//   }
	
	console.log('dataJSON leaded: ', dataJSON);

	const columns = [
		{ 
			id: shared.COLUMN_TIMER_TYPE, 
			label: shared.TIMER_TYPE, 
			minWidth: 190 
		},
		{ 
			id: shared.COLUMN_ID, 
			label: shared.ID, 
			// minWidth: 50 
		},
		{
			id: shared.COLUMN_STATUS,
			label: shared.STATUS,
			minWidth: 100,
			align: 'right',
			// format: (value) => value.toLocaleString('en-US'),
		},
		
		{
			id: shared.COLUMN_CREATION_TIME,
			label: shared.CREATION_TIME,
			minWidth: 270,
			align: 'right',
			// format: (value) => value.toLocaleString('en-US'),
		},
		{
			id: shared.COLUMN_TRIGSOURCE,
			label: shared.TRIGSOURCE,
			// minWidth: 170,
			align: 'left',
			// format: (value) => value.toFixed(2),
		},
		{
			id: shared.COLUMN_ACTIVATION_DATE,
			label: shared.ACTIVATION_DATE,
			minWidth: 170,
			align: 'right',
			// format: (value) => value.toFixed(2),
		},
		// {
		// 	id: shared.COLUMN_TIMER_TERMINATION,
		// 	label: shared.TIMER_TERMINATION,
		// 	minWidth: 130,
		// 	align: 'right',
		// 	// format: (value) => value.toFixed(2),
		// },
  	];

	const rows = dataJSON;

	console.log('Mock Data: ', rows);

	const useStyles = makeStyles({
		table: {
			minWidth: 700
		},
		backgroundHeader: {
			backgroundColor: shared.mainBlueColor,
			color: shared.USESTYLES.whiteColor
		},
		paginator: {
			color: shared.USESTYLES.whiteColor,
			backgroundColor: shared.mainBlueColor,
		},
		footer: {
		},
	});

export default function SearchResult() {

	const [page, setPage] = React.useState(0);

	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

  	const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>

			{columns.map((column) => (
                <TableCell
				className={classes.backgroundHeader}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}

          </TableRow>
        </TableHead>
        <TableBody>
		   {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
        </TableBody>
		<TableFooter> 
			  <TableRow
			  className={classes.footer}>
			  <TablePagination
				className={classes.paginator}
				rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
				colSpan={7}
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				SelectProps={{
				  inputProps: { 'aria-label': 'rows per page' },
				  native: true,
				}}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
				ActionsComponent={TablePaginationActions}
			/>
			</TableRow>
		</TableFooter>
      </Table>

    </TableContainer>
  );
}
