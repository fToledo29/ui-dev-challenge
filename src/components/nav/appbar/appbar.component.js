import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import IconButton from '@material-ui/core/IconButton';
import './appbar.component.css';
import { faCalculator, faUsers, faEnvelopeOpen, faUserTag, faSitemap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PersonIcon from '@material-ui/icons/Person';
import MarkunreadIcon from '@material-ui/icons/Markunread';


const useStyles = makeStyles((theme) => ({
	list: {
		width: 250,
	},
	fullList: {
		width: "auto",
	},
	menuButton: {
		height: '100%',
		width: '100%',
		marginLeft: 0,
		"&:hover": {
			backgroundColor: "transparent"
		  }
	},
	span: {
		marginRight: '1.2rem',

	}
	
}));


export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className='side-menu_open'>
		<ul>
			<li className="side-menu-logo">
				Virginia Premier
			</li>
			<li>
				<IconButton
				className={classes.menuButton}
				edge="start"
				color="inherit"
				aria-label="menu">		
					<span className={classes.span}>
						<PersonIcon />
					</span>
					<span>
						Dashboard
					</span>
				</IconButton>
			</li>
			<li>
				<IconButton
				className={classes.menuButton}
				edge="start"
				color="inherit"
				aria-label="menu">
					<span className={classes.span}>
						<FontAwesomeIcon icon={faUsers} />
					</span>
					<span>
						Application
					</span>
				</IconButton>
			</li>
			<li>
				<IconButton
				className={classes.menuButton}
				edge="start"
				color="inherit"
				aria-label="menu">
					<span className={classes.span}>
						<MarkunreadIcon />
					</span>
					<span>
						Member
					</span>
				</IconButton>
			</li>
			<li>
				<IconButton
				className={classes.menuButton}
				edge="start"
				color="inherit"
				aria-label="menu">
					<span className={classes.span}>
						<FontAwesomeIcon icon={faEnvelopeOpen} />
					</span>
					<span>
						Letter Request
					</span>
				</IconButton>
			</li>
			<li>
				<IconButton
				className={classes.menuButton}
				edge="start"
				color="inherit"
				aria-label="menu">
					<span className={classes.span}>
						<FontAwesomeIcon icon={faCalculator} />
					</span>
					<span>
						Letter Review
					</span>
				</IconButton>
			</li>
			<li>
				<IconButton
				className={classes.menuButton}
				edge="start"
				color="inherit"
				aria-label="menu">
					<span className={classes.span}>
						<WatchLaterIcon />
					</span>
					<span>
						Billing
					</span>
				</IconButton>
			</li>
			<li>
				<IconButton
				className={classes.menuButton}
				edge="start"
				color="inherit"
				aria-label="menu">
					<span className={classes.span}>
						<FontAwesomeIcon icon={faUserTag} />
					</span>
					<span>
						Timers
					</span>
				</IconButton>
			</li>
			<li>
				<IconButton
				className={classes.menuButton}
				edge="start"
				color="inherit"
				aria-label="menu">
					<span className={classes.span}>
						<FontAwesomeIcon icon={faSitemap} />
					</span>
					<span>
						Security Roles
					</span>
				</IconButton>
			</li>
		</ul>
    </div>
  );
}