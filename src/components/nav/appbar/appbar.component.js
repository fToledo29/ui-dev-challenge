import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { View } from 'react-native'

import WatchLaterIcon from '@material-ui/icons/WatchLater';
import IconButton from '@material-ui/core/IconButton';

import Toolbar from '@material-ui/core/Toolbar';
import './appbar.component.css';
import { faCalculator, faUsers, faEnvelopeOpen, faUserTag, faSitemap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PersonIcon from '@material-ui/icons/Person';
import MarkunreadIcon from '@material-ui/icons/Markunread';
// import AppBar from '@material-ui/core/AppBar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

const useStyles = makeStyles((theme) => ({
	list: {
		width: 250,
	},
	fullList: {
		width: "auto",
	},
	menuButton: {
		// marginRight: theme.spacing(2),
	}
}));


export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className='side-menu'>
		<ul>
			<li>
				<IconButton
				edge="start"
				color="inherit"
				aria-label="menu">		
					<PersonIcon />
				</IconButton>
			</li>
			<li>
				<IconButton
				edge="start"
				color="inherit"
				aria-label="menu">
					<FontAwesomeIcon icon={faUsers} />
				</IconButton>
			</li>
			<li>
			<IconButton
				edge="start"
				color="inherit"
				aria-label="menu">
					<MarkunreadIcon />
				</IconButton>
			</li>
			<li>
				<IconButton
				edge="start"
				color="inherit"
				aria-label="menu">
					<FontAwesomeIcon icon={faEnvelopeOpen} />
				</IconButton>
			</li>
			<li>
				<IconButton
				edge="start"
				color="inherit"
				aria-label="menu">
					<FontAwesomeIcon icon={faCalculator} />
				</IconButton>
			</li>
			<li>
				<IconButton
				edge="start"
				color="inherit"
				aria-label="menu">
					<WatchLaterIcon />
				</IconButton>
			</li>
			<li>
				<IconButton
				edge="start"
				color="inherit"
				aria-label="menu">
					<FontAwesomeIcon icon={faUserTag} />
				</IconButton>
			</li>
			<li>
				<IconButton
				edge="start"
				color="inherit"
				aria-label="menu">
					<FontAwesomeIcon icon={faSitemap} />
				</IconButton>
			</li>
		</ul>
    </div>
  );
}