import React from 'react';

export class EventChange {

	value;

	setValue;

	constructor() {
		const [triggerStatus, setTriggerStatus] = React.useState("");
		this.value = triggerStatus; 
		this.setValue = setTriggerStatus;
	}
		
	onEvent = (event) => {
		this.setValue(event.target.value);
	}
}