import timersReducer from './timers-reducer';
import { combineReducers } from 'redux';
import navReducer from './nav-reducer';
import sidebarReducer from './sidebar-reducer';
import routerReducer from './router-reducer';
import operation from './operation';

const allReducers = combineReducers({
	timers: timersReducer,
	nav: navReducer,
	sidebar: sidebarReducer,
	router: routerReducer,
	operation: operation
});


export default allReducers;
