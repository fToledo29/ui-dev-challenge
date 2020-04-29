import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import SearchParameters from './search-parameters/search-parameters.component'

// Utils
// import * as shared from '../../../shared/constants'


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#ececec'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12
  },
});

export default function Search() {
   
   const classes = useStyles();
  
   return (
      <Card className={classes.root}>
         <CardContent>
            <SearchParameters />
         </CardContent>
         <CardActions>
            <Button size="small">Learn More</Button>
         </CardActions>
      </Card>
   );
}
