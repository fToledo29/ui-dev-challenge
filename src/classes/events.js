import React from 'react';
// Redux
import {  useSelector, useDispatch }  from 'react-redux';
import { 
	selectSource,
	enterPrimaryID,
	selectTriggerStatus,
	selectTriggerType,
	onSearch
} from '../actions';

// Utils
import * as shared from "../shared/constants";

export class EventChange {

	state;

	setState;

	
	options = useSelector(state => state.timers);

	dispatch = useDispatch();


	constructor() {
		// const [triggerStatus, setTriggerStatus] = React.useState("");
		// this.value = triggerStatus; 
		// this.setValue = setTriggerStatus;

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