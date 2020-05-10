import React from 'react';
import { 
	faCalculator,
	faUsers,
	faEnvelopeOpen,
	faUserTag,
	faSitemap 
} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Mat Icons
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import DashboardIcon from '@material-ui/icons/Dashboard';
// Redux
import { useSelector, useDispatch }  from 'react-redux';
import { search, menuOption } from '../../../actions';
// Utils
import { makeStyles } from '@material-ui/core/styles';
import * as shared from '../../../shared/constants';
// Assets
import wiproLogo from '../../../assets/images/Wipro_Logo_New.svg';
import './appbar.component.css';

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
		width: '100%',
		position: 'absolute',
		display: 'flex',
		justifyContent: 'left',
		right: '-72px'
	}
	
}));


export default function ButtonAppBar({onChangeOperation}) {

	const classes = useStyles();

	const navState = useSelector(state => state.nav);

	const dispatch = useDispatch();

	const onNavigate = action => action();

	const goToLetterReview = () => onChangeOperation(shared.LETTER_REVIEW_ROUTE);

	const goToTimers = () => {
		dispatch(menuOption(shared.LABEL_ROUTE_TIMETS));
		dispatch(search());
		onChangeOperation(shared.TIMERS_ROUTE);
	};

	const getClass = () => {
		return navState.menuStatus === shared.LABEL_CLOSE ? 'side-menu_close' : 'side-menu_open';
	}

	return (
		<div className={getClass()}>
			<ul className="list-menu">
				<li className="side-menu-logo">
					<img alt="Wipro" src={wiproLogo} />	
					<span>
						Virginia Premier
					</span>
				</li>
				<li>
					<Link to="/" className="button-link">
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
							</Link>
				</li>
				<li>
					<Link to="/" className="button-link">
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
					</Link>
				</li>
				<li>
					<Link to="/" className="button-link">
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
					</Link>
				</li>
				<li>
					<Link to="/" className="button-link">
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
					</Link>
				</li>
				<li>
					<Link to="/letter" className="button-link">
						<IconButton
						onClick={()=> onNavigate(goToLetterReview)}
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
					</Link>
				</li>
				<li>
					<Link to="/" className="button-link">
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
					</Link>
				</li>
				<li className="button-selected">
					<Link 
					to="/timers" 
					onChange={()=> onNavigate(goToTimers)}
					className="button-link">
						<IconButton
						className={classes.menuButton}
						onClick={()=> onNavigate(goToTimers)}
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
					</Link>
				</li>
				<li>
					<Link to="/" className="button-link">
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
					</Link>
				</li>
				<li>
					<Link to="/" className="button-link">
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
					</Link>
				</li>
			</ul>
		</div>
	);
}