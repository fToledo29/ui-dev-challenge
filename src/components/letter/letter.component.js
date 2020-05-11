import React from 'react'
// Material
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './letter.component.css';
import 
ReviewParametersComponent 
from './Search-letter/letter-review/review-parameters.component';
import 
ReviewLetterSearchResultComponent 
from './Search-letter/letter-review/review-letter-search-result/review-letter-result-component';

// Utils
import * as shared from '../../shared/constants'
// Redux
import {  useSelector, useDispatch }  from 'react-redux';
import { 
	onSearchLetterReview
} from '../../actions';


/**
 * Setting up custom styles
 */
const useStyles = makeStyles((theme) => ({
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
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	text: {
		textTransform: 'initial'
	},
	greyBackground: {
		backgroundColor: shared.USESTYLES.grayBackground
    },
    blueLabel: {
		color: shared.USESTYLES.blueLabel,
		display: 'inherit',
		lineHeight: '24px'
	},
	aquaColor: {
		paddingRight: '15px',
		color: shared.USESTYLES.aquaColor
	}
}));

const LetterComponent = () => {

	const letterState = useSelector(state => state.letter);

	const dispatch = useDispatch();


    const classes = useStyles();

	const onClick = () => dispatch(onSearchLetterReview());


	return (
		<div className="letter-container">
			<div className="letter-search">
				<AppBar position="static">
					<Toolbar className={classes.greyBackground}>
						<Typography variant="h6" className={classes.blueLabel}>
							<RemoveCircleIcon className={classes.aquaColor} /> 
							Search
						</Typography>
					</Toolbar>
				</AppBar>

				<Card className={classes.root}>
					<CardContent>	
						<ReviewParametersComponent />

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
					</CardContent>
				</Card>
			</div>
			{letterState.letterSection === shared.LABEL_LETTER_REVIEW_SEARCH_RESULT ?
			(
				<div className="letter-search-result">
					<AppBar position="static">
						<Toolbar className={classes.greyBackground}>
							<Typography variant="h6" className={classes.blueLabel}>
								<RemoveCircleIcon className={classes.aquaColor} /> 
								{letterState.letterSection}
							</Typography>
						</Toolbar>
					</AppBar>

					<Card className={classes.root}>
						<CardContent>
							<ReviewLetterSearchResultComponent />

							<CardActions className={classes.card}>
								<Button 
								variant="contained" 
								className={classes.reset}>
									Update
								</Button>
							</CardActions>
						</CardContent>
					</Card>
				</div>
			) : null}
        </div>
	);
};

export default LetterComponent;
