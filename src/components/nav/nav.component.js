import React from 'react';
// Mat components
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// Styles
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import './nav.component.css';
//  Mat Icons
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';



const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

const theme = createMuiTheme({
	palette: {
		primary: {
			// light: will be calculated from palette.primary.main,
			main: '#233A6F',
		},
		secondary: {
			main: '#0089CF',
		},
	},
});

export default function Navbar() {
	const classes = useStyles();
	return (
		<div className="nav-container">
			<ThemeProvider theme={theme}>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="menu">
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" className={classes.title}>
							M360
						</Typography>
						<Button color="inherit">
							Welcome Fernando
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
			</ThemeProvider>
		</div>
	);
}
