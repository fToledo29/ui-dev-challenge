import React from 'react';

// Mat components
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

// Styles
import { makeStyles } from '@material-ui/core/styles';
import './nav.component.css';

//  Mat Icons
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import TemporaryDrawer from '../nav/drawer.component/drawer.component';

// Utils
import * as shared from '../../shared/constants';

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
	blueBackground: {
		backgroundColor: shared.USESTYLES.blueBackground,
	}
}));

/**
 * Renders Navegation bar
 */
export default function Navbar() {
	
	const classes = useStyles();
	
	return (
			
		<div className="nav-container">

				<AppBar position="static" className={classes.blueBackground}>
					<Toolbar>
					<TemporaryDrawer></TemporaryDrawer>
						
						
						<Typography variant="h6" className={classes.title}>
							M360
						</Typography>
						<Button color="inherit" className={classes.text}>
							<PersonIcon />
							Welcome Fernando Healt Plan - DEV-RJ0232T
						</Button>
						<Button color="inherit">
							<HomeIcon />
						</Button>
						<Button color="inherit">
							<NotificationsIcon />
						</Button>
						<Button color="inherit">
							<ExitToAppIcon/>
						</Button>
					</Toolbar>
				</AppBar>	
			{/* </ThemeProvider> */}
		</div>
	);
}
