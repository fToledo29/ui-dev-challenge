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


// Utils
import * as shared from '../../../../shared/constants';

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.background.default,
//     },
//   },
// }))(TableRow);

function createData(name, code, population, size) {
	const density = population / size;
	return { name, code, population, size, density };
  }

const columns = [
	{ id: 'name', label: 'Name', minWidth: 170 },
	{ id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
	{
	  id: 'population',
	  label: 'Population',
	  minWidth: 170,
	  align: 'right',
	  format: (value) => value.toLocaleString('en-US'),
	},
	{
	  id: 'size',
	  label: 'Size\u00a0(km\u00b2)',
	  minWidth: 170,
	  align: 'right',
	  format: (value) => value.toLocaleString('en-US'),
	},
	{
	  id: 'density',
	  label: 'Density',
	  minWidth: 170,
	  align: 'right',
	  format: (value) => value.toFixed(2),
	},
  ];

  const rows = [
	createData('India', 'IN', 1324171354, 3287263),
	createData('China', 'CN', 1403500365, 9596961),
	createData('Italy', 'IT', 60483973, 301340),
	createData('United States', 'US', 327167434, 9833520),
	createData('Canada', 'CA', 37602103, 9984670),
	createData('Australia', 'AU', 25475400, 7692024),
	createData('Germany', 'DE', 83019200, 357578),
	createData('Ireland', 'IE', 4857000, 70273),
	createData('Mexico', 'MX', 126577691, 1972550),
	createData('Japan', 'JP', 126317000, 377973),
	createData('France', 'FR', 67022000, 640679),
	createData('United Kingdom', 'GB', 67545757, 242495),
	createData('Russia', 'RU', 146793744, 17098246),
	createData('Nigeria', 'NG', 200962417, 923768),
	createData('Brazil', 'BR', 210147125, 8515767),
	createData('Australia', 'AU', 25475400, 7692024),
	createData('Germany', 'DE', 83019200, 357578),
	createData('Ireland', 'IE', 4857000, 70273),
	createData('Mexico', 'MX', 126577691, 1972550),
	createData('Japan', 'JP', 126317000, 377973),
	createData('Australia', 'AU', 25475400, 7692024),
	createData('Germany', 'DE', 83019200, 357578),
	createData('Ireland', 'IE', 4857000, 70273),
	createData('Mexico', 'MX', 126577691, 1972550),
	createData('Japan', 'JP', 126317000, 377973),
	createData('Australia', 'AU', 25475400, 7692024),
	createData('Germany', 'DE', 83019200, 357578),
	createData('Ireland', 'IE', 4857000, 70273),
	createData('Mexico', 'MX', 126577691, 1972550),
	createData('Japan', 'JP', 126317000, 377973),
	createData('Australia', 'AU', 25475400, 7692024),
	createData('Germany', 'DE', 83019200, 357578),
	createData('Ireland', 'IE', 4857000, 70273),
	createData('Mexico', 'MX', 126577691, 1972550),
	createData('Japan', 'JP', 126317000, 377973),
	createData('Australia', 'AU', 25475400, 7692024),
	createData('Germany', 'DE', 83019200, 357578),
	createData('Ireland', 'IE', 4857000, 70273),
	createData('Mexico', 'MX', 126577691, 1972550),
	createData('Japan', 'JP', 126317000, 377973),
	createData('Australia', 'AU', 25475400, 7692024),
	createData('Germany', 'DE', 83019200, 357578),
	createData('Ireland', 'IE', 4857000, 70273),
	createData('Mexico', 'MX', 126577691, 1972550),
	createData('Japan', 'JP', 126317000, 377973),
	createData('Australia', 'AU', 25475400, 7692024),
	createData('Germany', 'DE', 83019200, 357578),
	createData('Ireland', 'IE', 4857000, 70273),
	createData('Mexico', 'MX', 126577691, 1972550),
	createData('Japan', 'JP', 126317000, 377973),
	createData('Australia', 'AU', 25475400, 7692024),
	createData('Germany', 'DE', 83019200, 357578),
	createData('Ireland', 'IE', 4857000, 70273),
	createData('Mexico', 'MX', 126577691, 1972550),
	createData('Japan', 'JP', 126317000, 377973),
  ];


const useStyles = makeStyles({
	// table: {
	// 	minWidth: 500,
	//   },
  table: {
	minWidth: 700
	// backgroundColor: shared.USESTYLES.grayBackground,
  },
  backgroundHeader: {
	backgroundColor: shared.mainBlueColor,
	color: shared.USESTYLES.whiteColor
  },
  paginator: {
	color: shared.USESTYLES.whiteColor,
	backgroundColor: shared.mainBlueColor,
	// minHeight: '10px',
	// height: '22px;'
  },
  footer: {
	// minHeight: '10px',
	// height: '21px;'
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
		{/* // className={classes.footer}> */}
			  <TableRow
			  className={classes.footer}>
			  <TablePagination
				className={classes.paginator}
				rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
				colSpan={5}
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
