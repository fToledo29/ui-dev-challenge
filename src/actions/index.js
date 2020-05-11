import * as shared from '../shared/constants';

export const search = () => {
	return {
		type: shared.SEARCH_SECTION,
		payload: shared.LABEL_SEARCH
	};
};

export const timers = () => {
	return {
		type: shared.TIMERS,
		payload: shared.TIMER_OPTIONS 
	};
};

export const  menuOpen = () => {
	return {
		type: shared.MENU_OPEN
	};
};

export const  menuClose = () => {
	return {
		type: shared.MENU_CLOSE
	};
};

export const menuOption = (route) => {
	return {
		type: shared.TIMERS,
		payload: route
	};
};

export const selectSource = (source) => {
	return {
		type: shared.TIMERS_SOURCE_PARAMETER,
		payload: source
	};
};

export const enterPrimaryID = (primaryID) => {
	return {
		type: shared.TIMERS_PRIMARY_ID_PARAMETER,
		payload: primaryID
	};
};

export const selectTriggerStatus = (triggerStatus) => {
	return {
		type: shared.TRIGGER_STATUS_PARAMETER,
		payload: triggerStatus
	};
};

export const selectTriggerType = (triggerType) => {
	return { 
		type: shared.TRIGGER_TYPE_PARAMETER,
		payload: triggerType
	};
};

export const onSearch = () => {
	return {
		type: shared.ON_SEARCH,
		payload: shared.LABEL_SEARCH_RESULT 
	};
};

export const onResult = () => {
	return {
		type: shared.SEARCH_RESULT,
		payload: shared.LABEL_SEARCH_RESULT
	};
};

export const onRoute = () => {
	return {
		type: shared.TIMERS_ROUTING,
		payload: shared.TIMERS_ROUTE

	};
};

export const setOperation = (name) => {
	return {
		type: shared.SET_OPERATION,
		name
	};
};

export const editActivationDate = (value, row) => {
	return {
		type: shared.ACTIVATION_DATE_VALUE,
		row,
		value
	};
};

export const enableActivationDate = (filedName) => {
	return {
		type: shared.ENABLE_ACTIVATION_DATE,
		filedName
	}
}

// Letter actions

export const selectLetterSource = (value) => {
	return {
		type: shared.LETTER_SOURCE_PARAMETER,
		payload: value
	};
};
export const enterLeterPrimaryID = (value) => {
	return {
		type: shared.LETTER_PRIMARY_ID_PARAMETER,
		payload: value
	};
};
export const enterLetterRequestFrom = (value) => {
	return {
		type: shared.LETTER_REQUEST_DATE_FROM,
		payload: value
	};
};
export const enterLetterTo = (value) => {
	return {
		type: shared.LETTER_TO,
		payload: value
	};
};
export const enterLetterStatus = (value) => {
	return {
		type: shared.LETTER_STATUS,
		payload: value
	};
};
export const enterLetterBatchID = (value) => {
	return {
		type: shared.LETTER_BATCH_ID,
		payload: value
	};
};
export const enterLetterDescription = (value) => {
	return {
		type: shared.LETTER_DESCRIPTION,
		payload: value
	};
};
