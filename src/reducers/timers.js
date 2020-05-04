
import * as shared from '../shared/constants';

const timersReducer = (state = {}, action) => {
	switch (action.type) {
		case shared.SEARCH:
			return Object.assign(
				{},
				state, 
				{ 
					timersSection:  shared.LABEL_SEARCH 
				}
			);
		default:
			return state;
	}
};

export default timersReducer;
