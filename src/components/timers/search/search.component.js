import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import SearchParameters from './search-parameters/search-parameters.component'
import SearchResult from './search-result/search-result.component';

// Redux
import {  useSelector, useDispatch }  from 'react-redux';
import { 
	onSearch
} from '../../../actions';

// Utils
import * as shared from '../../../shared/constants';



const useStyles = makeStyles({
	root: {
		minWidth: 275,
		backgroundColor: '#ececec'

	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
		textTransform: 'none'
	},
	reset: {
		backgroundColor: shared.USESTYLES.aquaColor,
		color: shared.USESTYLES.whiteColor,
		textTransform: shared.USESTYLES.textTransform 
	},
	search: {
		backgroundColor: shared.USESTYLES.blueBackground,
		color: shared.USESTYLES.whiteColor,
		textTransform: shared.USESTYLES.textTransform 
	}, 
	card: {
		height: 'auto',
		bottom: '-13px',
		position: 'relative',
		display: 'flex'
	}
});

export default function Search() {

	const [showResults, setShowResults] = React.useState(false);

	const state = useSelector(state => state.timers);
	
	  
	const dispatch = useDispatch();

	const onClick = () => {
		dispatch(onSearch());
		setShowResults(true)
	};
   
   const classes = useStyles();
  
   return (
      <Card className={classes.root}>
         <CardContent>
           

			{/* { state.timersSection === shared.LABEL_SEARCH ?  <SearchParameters /> : null } */}
			<SearchParameters />

			<CardActions className={classes.card}>
				<Button 
				onClick={onClick} 
				variant="contained"
				className={classes.search} 
				color="primary">
					Search
				</Button>
				<Button 
				variant="contained" 
				className={classes.reset}>
					Reset
				</Button>
			</CardActions>
			{/* { showResults ?  <SearchResult/> : null } */}
			{ (state.timersSection === shared.LABEL_SEARCH_RESULT) ?  <SearchResult/> : null }
         </CardContent>
      </Card>
   );
}
