import timersReducer from './timers';
import { combineReducers } from 'redux';
import navReducer from './nav';

const allReducers = combineReducers({
	timer: timersReducer,
	nav: navReducer
});


export default allReducers;
