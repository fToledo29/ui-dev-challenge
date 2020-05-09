import * as shared from '../shared/constants';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = {
	router: '/',
	locationBeforeTransitions: '/'
}

const routerReducer = (state = initialState, action) => {
	switch(action.type) {
		case shared.TIMERS_ROUTING:
			return {
				...state,
				router: action.payload
			};
		case LOCATION_CHANGE:
			return { 
				...state, 
				locationBeforeTransitions: action.payload
			};
		case  shared.SET_OPERATION:
			const { name } = action;
			let location = state.locationBeforeTransitions;
			const pathname = `/${name}`;
			location = { 
				...location,
				pathname,
				action: 'PUSH'
			};
			return { 
				...state, 
				locationBeforeTransitions: location
			};
		default:
			return state;
	}
} 

export default routerReducer;