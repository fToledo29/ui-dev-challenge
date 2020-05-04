import { createMuiTheme } from "@material-ui/core/styles";

export const mainBlueColor = '#22396E';
export const mainGreyColor = '#C9C9C9';

// For actions
export const TIMERS = 'TIMERS';
export const SEARCH = 'SEARCH';
export const TIMER_OPTIONS = 'TIMER_OPTIONS';
export const MENU_OPEN = 'MENU_OPEN';
export const MENU_CLOSE = 'MENU_CLOSE';

// Label's constants
export const OPEN = 'Opened';
export const CLOSE = 'Close';


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