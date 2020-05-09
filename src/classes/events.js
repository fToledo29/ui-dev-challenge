import React from 'react';
// Redux
import {  useSelector, useDispatch }  from 'react-redux';
import { 
	selectSource
} from '../actions';

export class EventChange {

	state;

	setState;
	
	options = useSelector(state => state.timers);

	dispatch = useDispatch();


	constructor() {

		const [state, setState] = React.useState({
			age: '',
			name: 'hai'
		  });

		  this.state = state; 
		this.setState = setState;
	}
		
	onEvent = (event) => {

		const name = event.target.name;
		this.setState({
		  ...this.state,
		  [name]: event.target.value,
		});

		console.log('Event fired: ', event.target.value);

		console.log('Options: ', this.options);

		this.dispatch(selectSource('Application'));

		this.setState(event.target.value);
	}
}