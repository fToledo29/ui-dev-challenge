import React from 'react';
import clsx from 'clsx';

// Mat-Components
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

// Mat-Icons
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
	list: {
		width: 250,
	},
	fullList: {
		width: "auto",
	},
	menuButton: {
		marginRight: theme.spacing(2),
	}
}));

const TemporaryDrawer = ((props, ref) => {

	const classes = useStyles();

	const [state, setState] = React.useState({
	  top: false,
	  left: false,
	  bottom: false,
	  right: false,
	});


	const toggleDrawer = (anchorParameter, open) => (event) => {

		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
		  return;
		}
	
		setState({ ...state, [anchorParameter]: open });
	};


const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
			'Dashboard',
			'Application',
			'Member',
			'Letter Request',
			'Letter Review',
			'Billing',
			'Timers',
			'Security Roles',
			'Workflow'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
	
  return (
    <div>
		{['left'].map((anchor) => (
			<React.Fragment key={anchor}>

			<IconButton
			// onClick={toggleDrawer(anchor, true)}
			// onClick={() => onToggleMenu()}
			edge="start"
			className={classes.menuButton}
			color="inherit"
			aria-label="menu">		
				<MenuIcon />
			</IconButton>

			<Drawer
			 position="static"
			anchor={anchor} 
			open={state[anchor]}
			onClose={toggleDrawer(anchor, false)}>

				{list(anchor)}
				
				</Drawer>

			</React.Fragment>

		))}
    </div>
  );

})

export default TemporaryDrawer;