import React from 'react'
// Material
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { makeStyles } from '@material-ui/core/styles';
// Utils
import * as shared from '../../shared/constants'
// Redux
import {  useSelector }  from 'react-redux';


/**
 * Setting up custom styles
 */
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
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

	const option = useSelector(state => state.timers);

    const classes = useStyles();


	return (
		<div className="timers-container">
                <AppBar position="static">
                    <Toolbar className={classes.greyBackground}>
                        <Typography variant="h6" className={classes.blueLabel}>
							<RemoveCircleIcon className={classes.aquaColor} /> 
							{/* {option.timersSection} */}
							Search
                        </Typography>
                    </Toolbar>
                </AppBar>

				
                {/* <Search /> */}
        </div>
	);
};

export default LetterComponent;
