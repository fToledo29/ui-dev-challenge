
import * as shared from '../shared/constants';

const initalState = {
	timersSection: '',
	searchParameters: []
}

function timersReducer (state = initalState, action) {
	switch (action.type) {
		case shared.SEARCH:
			return {
				...state, 
				timersSection:  action.payload 
			};
		case shared.SOURCE_PARAMETER: 
			return {
				...state,
				searchParameters: [...state.searchParameters, action.payload]
			};
		case shared.PRIMARY_ID_PARAMETER: 
			return {
				...state,
				searchParameters: [...state.searchParameters, action.payload]
			};
		case shared.TRIGGER_STATUS_PARAMETER: 
			return {
				...state,
				searchParameters: [...state.searchParameters, action.payload]
			};
		case shared.TRIGGER_TYPE_PARAMETER: 
			return {
				...state,
				searchParameters: [...state.searchParameters, action.payload]
			};
		default:
			return state;
	}
}

export default timersReducer;
