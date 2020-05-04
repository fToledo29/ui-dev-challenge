import * as shared from '../shared/constants';

export const search = () => {
	return {
		type: shared.SEARCH
	};
};

export const timers = () => {
	return {
		type: shared.TIMERS,
		oprion: shared.TIMER_OPTIONS 
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