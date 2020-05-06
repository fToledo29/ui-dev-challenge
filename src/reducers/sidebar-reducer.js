
import * as shared from '../shared/constants';

const initialState = {
	navSection: '' 
}

function sidebarReducer (state = initialState, action) {
	switch(action.type) {
		case shared.TIMERS:
			return {
				...state,
				navSection: action.payload
			};
		default: 
			return state;
	}
}

export default sidebarReducer;