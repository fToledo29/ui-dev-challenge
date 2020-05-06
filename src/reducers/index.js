import timersReducer from './timers-reducer';
import { combineReducers } from 'redux';
import navReducer from './nav-reducer';
import sidebarReducer from './sidebar-reducer';

const allReducers = combineReducers({
	timers: timersReducer,
	nav: navReducer,
	sidebar: sidebarReducer
});


export default allReducers;
