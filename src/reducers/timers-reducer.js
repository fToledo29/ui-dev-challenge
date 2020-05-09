
import * as shared from '../shared/constants';

const initalState = {
	timersSection: '',
	searchParameters: {}
}

function timersReducer (state = initalState, action) {
	switch (action.type) {
		case shared.SEARCH_SECTION:
			return {
				...state, 
				timersSection:  action.payload 
			};
		case shared.SOURCE_PARAMETER: 
			return {
				...state,
				searchParameters: {
						...state.searchParameters,
						source: action.payload
					}
			};
		case shared.PRIMARY_ID_PARAMETER: 
			return {
				...state,
				searchParameters: {
					...state.searchParameters,
					primaryId: action.payload
				}
			};
		case shared.TRIGGER_STATUS_PARAMETER: 
			return {
				...state,
				searchParameters: {
					...state.searchParameters,
					triggerStatus: action.payload
				}
			};
		case shared.TRIGGER_TYPE_PARAMETER: 
			return {
				...state,
				searchParameters: {
					...state.searchParameters,
					triggerType: action.payload
				}
			};
		case shared.ON_SEARCH:
			return {
				...state,
					timersSection: action.payload
			}
		default:
			return state;
	}
}

export default timersReducer;
