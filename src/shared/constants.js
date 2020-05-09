export const mainBlueColor = '#22396E';
export const mainGreyColor = '#C9C9C9';

// Actions Types
export const TIMERS = 'TIMERS';
export const SEARCH_SECTION = 'SEARCH_SECTION';
export const ON_SEARCH = 'ON_SEARCH'
export const TIMER_OPTIONS = 'TIMER_OPTIONS';
export const MENU_OPEN = 'MENU_OPEN';
export const MENU_CLOSE = 'MENU_CLOSE';
export const SOURCE_PARAMETER = 'SOURCE_PARAMETER';
export const PRIMARY_ID_PARAMETER = 'PRIMARY_ID_PARAMETER';
export const TRIGGER_STATUS_PARAMETER = 'TRIGGER_STATUS_PARAMETER';
export const TRIGGER_TYPE_PARAMETER = 'TRIGGER_TYPE_PARAMETER';
export const SEARCH_RESULT = 'SEARCH_RESULT';

// Label constants
export const LABEL_ROUTE_TIMETS = 'timers';
export const LABEL_OPEN = 'Opened';
export const LABEL_CLOSE = 'Close';
export const LABEL_SEARCH = 'Search';
export const LABEL_SEARCH_RESULT = 'Search Result';
// Column Names
export const TIMER_TYPE = 'Timer Type';
export const ID = 'ID';
export const STATUS = 'Status';
export const CREATION_TIME = 'Creation Time';
export const TRIGSOURCE = 'Trig.Source';
export const ACTIVATION_DATE = 'Activation Date';
export const TIMER_TERMINATION = 'Timer Rermination';

// Column IDs
export const COLUMN_TIMER_TYPE = 'timerType';
export const COLUMN_ID = 'id';
export const COLUMN_STATUS = 'status';
export const COLUMN_CREATION_TIME = 'creationTime';
export const COLUMN_TRIGSOURCE = 'trigSource';
export const COLUMN_ACTIVATION_DATE = 'activationDate';
export const COLUMN_TIMER_TERMINATION = 'TimerRermination';

/**
 * Customized main styles.
 */
export const USESTYLES = {
	blueLabel: mainBlueColor,
	grayLabel: mainGreyColor,
	grayBackground: mainGreyColor,
	blueBackground: mainBlueColor,
	textTransform: 'none',
	aquaColor: '#10a5aa',
	whiteColor: '#fff'
	// backgroundColor: mainBlueColor,
};

// /**
//  * Sets main theme
//  */
// export const THEME = createMuiTheme({
// 	palette: {
// 		primary: {
//       	main: mainBlueColor,
//    	 },
//     	secondary: {
//       	main: "#0089CF",
//     	}
// 	}
// });