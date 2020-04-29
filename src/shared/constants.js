import { createMuiTheme } from "@material-ui/core/styles";

const mainBlueColor = '#22396E';
const mainGreyColor = '#C9C9C9';

/**
 * Sets main theme
 */
export const THEME = createMuiTheme({
	palette: {
		primary: {
      	main: mainBlueColor,
   	 },
    	secondary: {
      	main: "#0089CF",
    	}
	}
});

/**
 * Customized styles.
 */
export const USESTYLES = {
	blueLabel: mainBlueColor,
	grayLabel: mainGreyColor,
	grayBackground: mainGreyColor,
	blueBackground: mainBlueColor
		// backgroundColor: mainBlueColor,
};
