
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
		default:
			return state;
	}
}

export default timersReducer;
