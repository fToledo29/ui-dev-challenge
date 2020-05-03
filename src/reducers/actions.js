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