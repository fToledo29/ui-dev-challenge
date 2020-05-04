import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import IconButton from '@material-ui/core/IconButton';
import './appbar.component.css';
import { faCalculator, faUsers, faEnvelopeOpen, faUserTag, faSitemap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PersonIcon from '@material-ui/icons/Person';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import wiproLogo from '../../../assets/images/Wipro_Logo_New.svg';
import DashboardIcon from '@material-ui/icons/Dashboard';

// Redux
import {  useSelector, useDispatch }  from 'react-redux';
import { timers, search } from '../../../actions';




// Utils
import * as shared from '../../../shared/constants';



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
		justifyContent: 'left',
		paddingLeft: '0',
		overflow: 'hidden',
		"&:hover": {
			backgroundColor: "transparent"
		}
	},
	span: {
		zIndex: 5,
		width: "65px",
		backgroundColor: '#DFE2EE',
		borderRadius: '1%'

	},
	sectionName: {
		width: '7rem',
		position: 'absolute',
		right: '0',
		display: 'flex'

	}
	
}));


export default function ButtonAppBar() {

	const classes = useStyles();

	const options = useSelector(state => state.nav);

	const dispatch = useDispatch();

	// dispatch(search());

	console.log('Options: ', options);


	const getClass = () => {
		return options.menuStatus === shared.LABEL_CLOSE ? 'side-menu_close' : 'side-menu_open';
	}

  return (
	<div className={getClass()}>
		<ul className="list-menu">
			<li className="side-menu-logo">
				{/* Virginia Premier */}
				<img alt="Wipro" src={wiproLogo} />	
			</li>
			<li>
				<IconButton
				className={classes.menuButton}
				edge="start"
				color="inherit"
				aria-label="menu">		
					<span className={classes.span}>
						<DashboardIcon />
					</span>
					<span className={classes.sectionName}>
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
						<PersonIcon />
					</span>
					<span className={classes.sectionName}>
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
						<FontAwesomeIcon icon={faUsers} />
					</span>
					<span className={classes.sectionName}>
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
						<MarkunreadIcon />
					</span>
					<span className={classes.sectionName}>
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
						<FontAwesomeIcon icon={faEnvelopeOpen} />
					</span>
					<span className={classes.sectionName}>
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
						<FontAwesomeIcon icon={faCalculator} />
					</span>
					<span className={classes.sectionName}>
						Billing
					</span>
				</IconButton>
			</li>
			<li className="button-selected">
				<IconButton
				className={classes.menuButton}
				onClick={() => dispatch(search())}
				edge="start"
				color="inherit"
				aria-label="menu">
					<span className={classes.span}>
						<WatchLaterIcon />
					</span>
					<span className={classes.sectionName}>
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
						<FontAwesomeIcon icon={faUserTag} />
					</span>
					<span className={classes.sectionName}>
						Security Roles
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
					<span className={classes.sectionName}>
						Workflow
					</span>
				</IconButton>
			</li>
		</ul>
    </div>
  );
}