import timersReducer from './timers.js';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	timer: timersReducer
});


export default allReducers;
