import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
import {  useSelector, useDispatch }  from 'react-redux';
import { editActivationDate, enableActivationDate } from '../../../../actions';

// Utils
import * as shared from '../../../../shared/constants';

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
	},
	{
		id: shared.COLUMN_STATUS,
		label: shared.STATUS,
		minWidth: 100,
		align: 'right',
	},
	
	{
		id: shared.COLUMN_CREATION_TIME,
		label: shared.CREATION_TIME,
		minWidth: 270,
		align: 'right',
	},
	{
		id: shared.COLUMN_TRIGSOURCE,
		label: shared.TRIGSOURCE,
		align: 'left',
	},
	{
		id: shared.COLUMN_ACTIVATION_DATE,
		label: shared.ACTIVATION_DATE,
		minWidth: 170,
		align: 'right',
	},
	{
		id: shared.COLUMN_TIMER_TERMINATION,
		label: shared.TIMER_TERMINATION,
		minWidth: 130,
		align: 'right',
	},
];

const rows = dataJSON;

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
	reset: {
		backgroundColor: shared.USESTYLES.aquaColor,
		color: shared.USESTYLES.whiteColor,
		textTransform: shared.USESTYLES.textTransform 
	},
});

export default function SearchResult() {

	let editing = false;

	const dispatch = useDispatch();
	
	const [page, setPage] = React.useState(0);
	
	const state = useSelector(state => state.timers);
	  
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event, newPage) => setPage(newPage);
	
	const onEdit = (filedName) => dispatch(enableActivationDate(filedName));
	
	const getDynamicField = (value) => value.replace(/ /g, '').replace('.', '');

	const onChangeDate = (e, field) => dispatch(editActivationDate(e.target.value, field));

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
					const field = getDynamicField(row.timerType);
					const disabledProp = field.toString().toString().substr(0, 10);

                    return (
                      <TableCell key={column.id} align={column.align}>
						{column.id === shared.COLUMN_ACTIVATION_DATE ? (
							<TextField
							disabled={!state.timerData[disabledProp] || editing}
							height="25%"
							id={column.id + row.code}
							variant="outlined"
							size="small"
							value={state.timerData[field] || row.activationDate}
							onChange={(e) => onChangeDate(e, field)}
							/>
						 )
						: column.id === shared.COLUMN_TIMER_TERMINATION ? (
							<Button 
							// dRef[fieldRef]
							onClick={() => onEdit(disabledProp)}
							variant="contained" 
							className={classes.reset}>
								Edit
							</Button>
						) : column.format && typeof value === 'number' ? column.format(value) : value}
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
