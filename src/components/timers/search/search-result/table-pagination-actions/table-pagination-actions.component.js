import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import LastPageIcon from '@material-ui/icons/LastPage';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

// Utils
import * as shared from '../../../../../shared/constants';


const useStyles1 = makeStyles((theme) => ({
	root: {
		flexShrink: 0,
		marginLeft: theme.spacing(3.5)
	},
	buttons: {
		color: shared.USESTYLES.whiteColor
	  },
  }));

export default function TablePaginationActions(props) {
	const classes = useStyles1();
	const theme = useTheme();
	const { count, page, rowsPerPage, onChangePage } = props;
  
	const handleFirstPageButtonClick = (event) => {
	  onChangePage(event, 0);
	};
  
	const handleBackButtonClick = (event) => {
	  onChangePage(event, page - 1);
	};
  
	const handleNextButtonClick = (event) => {
	  onChangePage(event, page + 1);
	};
  
	const handleLastPageButtonClick = (event) => {
	  onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
	};
  
	return (
	  <div className={classes.root}>
		<IconButton
		className={classes.buttons}
		onClick={handleFirstPageButtonClick}
		disabled={page === 0}
		aria-label="first page">
		  {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
		</IconButton>
		<IconButton 
		className={classes.buttons}
		onClick={handleBackButtonClick}
		disabled={page === 0}
		aria-label="previous page">
		  {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
		</IconButton>
		<IconButton
		className={classes.buttons}
		onClick={handleNextButtonClick}
		disabled={page >= Math.ceil(count / rowsPerPage) - 1}
		aria-label="next page">
		  {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
		</IconButton>
		<IconButton
		className={classes.buttons}
		onClick={handleLastPageButtonClick}
		disabled={page >= Math.ceil(count / rowsPerPage) - 1}
		aria-label="last page">
		  {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
		</IconButton>
	  </div>
	);
  }
  