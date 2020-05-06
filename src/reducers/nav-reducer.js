import * as shared from '../shared/constants';

const navReducer = (state = {}, action) => {
	switch(action.type) {
		case shared.MENU_CLOSE:
			return Object.assign(
					{},
					state,
					{ 
						menuStatus: shared.LABEL_CLOSE
					}
				);
		case shared.MENU_OPEN:
			return Object.assign(
					{}, 
					state, 
					{
						menuStatus: shared.LABEL_OPEN
					}
				);
		default:
			return state;
	}
}

export default navReducer;