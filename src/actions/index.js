import * as shared from '../shared/constants';

export const search = () => {
	console.log('menu route: ', shared.LABEL_SEARCH);
	return {
		type: shared.SEARCH,
		payload: shared.LABEL_SEARCH
	};
};

export const timers = () => {
	return {
		type: shared.TIMERS,
		payload: shared.TIMER_OPTIONS 
	}
}

export const  menuOpen = () => {
	return {
		type: shared.MENU_OPEN
	}
}

export const  menuClose = () => {
	return {
		type: shared.MENU_CLOSE
	}
}

export const menuOption = (route) => {
	return {
		type: shared.TIMERS,
		payload: route
	};
}

export const selectSource = (source) => {
	return {
		type: shared.SOURCE_PARAMETER,
		payload: source
	}
}

export const enterPrimaryID = (primaryID) => {
	return {
		type: shared.PRIMARY_ID_PARAMETER,
		payload: primaryID
	}
}

export const selectTriggerStatus = (triggerStatus) => {
	return {
		type: shared.TRIGGER_STATUS_PARAMETER,
		payload: triggerStatus
	}
}

export const selectTriggerType = (triggerType) => {
	return { 
		type: shared.TRIGGER_TYPE_PARAMETER,
		payload: triggerType
	}
}

export const onSearch = (parameters) => {
	return {
		type: shared.SEARCH,
		payload: parameters
	}
}