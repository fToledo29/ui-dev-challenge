
import * as shared from '../shared/constants';

const initalState = {
	timersSection: '',
	searchParameters: {},
	timerData: {}
};

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
			};
		case shared.ACTIVATION_DATE_VALUE:
			return {
				...state,
				timerData: {
					...state.timerData,
					[action.row]: action.value
				} 
			};
		case shared.ENABLE_ACTIVATION_DATE:
			return {
				...state,
				timerData: {
					...state.timerData,
					[action.filedName]: !state.timerData[action.filedName]
				}
			};
		default:
			return state;
	}
}

export default timersReducer;
