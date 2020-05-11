

import * as shared from '../shared/constants';

const initalState = {
	letterSection: '',
	searchParameters: {},
	letterData: {}
};

const letterReducer = (state = initalState, action) => {
	switch (action.type) {
		case shared.LETTER_SOURCE_PARAMETER: 
			return {
				...state,
				searchParameters: {
						...state.searchParameters,
						source: action.payload
					}
			};
		case shared.LETTER_PRIMARY_ID_PARAMETER: 
			return {
				...state,
				searchParameters: {
					...state.searchParameters,
					primaryId: action.payload
				}
			};
		case shared.LETTER_REQUEST_DATE_FROM:
			return {
				...state,
				searchParameters: {
					...state.searchParameters,
					requestDateFrom: action.payload
				}
			};
		case shared.LETTER_TO:
			return {
				...state,
				searchParameters: {
					...state.searchParameters,
					requestDateTo: action.payload
				}
			};
		case shared.LETTER_STATUS:
			return {
				...state,
				searchParameters: {
					...state.searchParameters,
					satatus: action.payload
				}
			};
		case shared.LETTER_BATCH_ID:
			return {
				...state,
				searchParameters: {
					...state.searchParameters,
					batchID: action.payload
				}
			};
		case shared.LETTER_DESCRIPTION:
			return {
				...state,
				searchParameters: {
					...state.searchParameters,
					description: action.payload
				}
			};
		default:
			return state;
	}
}

export default letterReducer;