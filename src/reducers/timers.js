// const SEARCH = 'SEARCH';

import * as shared from '../shared/constants';

const timersReducer = (state = {}, action) => {
	switch (action.type) {
		case shared.SEARCH:
			return Object.assign({}, state, { timers:  'Search' })
		default:
			return state;
	}
};

export default timersReducer;
