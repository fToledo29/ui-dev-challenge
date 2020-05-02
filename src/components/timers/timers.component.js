import React from 'react';
import './timers.component.css'
import Search from './search/search.component';

// Material
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Utils
import * as shared from '../../shared/constants'

import {  useSelector, useDispatch }  from 'react-redux';
import { search } from '../../reducers/actions';



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
    grayLabel: {
        color: shared.USESTYLES.blueLabel
    }
}));


/**
 * Renders Times section
 */
export default function Timers() {

	const option = useSelector(state => state.options);

	const dispatch = useDispatch();
	
	dispatch(search());

    const classes = useStyles();

    return (
        <div className="timers-container">
                <AppBar position="static">
                    <Toolbar className={classes.greyBackground}>
                        <Typography variant="h6" className={classes.grayLabel}>
                            Search
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Search />
        </div>
    )
}
