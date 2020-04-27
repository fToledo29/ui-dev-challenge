import React from 'react';
import './timers.component.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

/**
 * Customize Appbar and Typography styles.
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
      color: '#22396E'
    },
    bar: {
        backgroundColor: '#E4E4E4'
    }
  }));

  /**
   * Renders Times section
   */
export default function Timers() {
    const classes = useStyles();
    return (
        <div className="timers-container">
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Search
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}