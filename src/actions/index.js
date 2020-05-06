import * as shared from '../shared/constants';

export const search = () => {
	console.log('menu route: ', shared.LABEL_SEARCH);
	return {
		type: shared.SEARCH,
		payload: shared.LABEL_SEARCH
	};
};

export const timers = () => {
	return {
		type: shared.TIMERS,
		payload: shared.TIMER_OPTIONS 
	}
}

export const  menuOpen = () => {
	return {
		type: shared.MENU_OPEN
	}
}

export const  menuClose = () => {
	return {
		type: shared.MENU_CLOSE
	}
}

export const menuOption = (route) => {
	console.log('menu route: ', route);
	return {
		type: shared.TIMERS,
		payload: route
	};
}
