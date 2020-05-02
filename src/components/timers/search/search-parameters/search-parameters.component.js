import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from '@material-ui/core/NativeSelect';
import * as selectConfig from './config-select';
import InputLabel from '@material-ui/core/InputLabel';
import { EventChange }  from '../../../../classes/events';

// Styles
import "./search-parameters.component.css";

// Utils
import * as shared from "../../../../shared/constants";


const useStyles = makeStyles((theme) => ({
  root: {
	"& > *": {
	  margin: theme.spacing(1),
	  width: "25ch",
	},
  },
  pos: {
	marginBottom: 12,
	color: shared.USESTYLES.blueLabel,
  },
  backGroundField: {
	backgroundColor: "#fff",
  },
}));





export default function SearchParameters() {

	const classes = useStyles();

	const BootstrapInput18Rem = selectConfig.getBootstrapInput('18rem');

	const BootstrapInput10Rem = selectConfig.getBootstrapInput('10rem');
		
	const onSource = new EventChange();
	
	const onTS = new EventChange();

	const onTriggerType = new EventChange();

  return (
	<div>
	  <form className={classes.root} noValidate autoComplete="off">
		<div className="field-wrapper">
			
			<InputLabel className={classes.pos}>Source</InputLabel>

			<FormControl className={classes.margin}>
		  	
				<NativeSelect
				id="select-source"
				value={onSource.value}
				onChange={onSource.onEvent}
				input={<BootstrapInput10Rem />}>
					<option value="" disabled>
						Select...
					</option>
					<option value={1}>Application</option>
					<option value={2}>Member</option>
				</NativeSelect>
			</FormControl>
		
		</div>
		

		<div className="field-wrapper">
	  
		  <InputLabel className={classes.pos}  required>Primary ID</InputLabel>
		  <TextField
			height="25%"
			className={classes.backGroundField}
			id="outlined-basic"
			label="Primary ID"
			variant="outlined"
			size="small"
		  />

		</div>

		<div className="field-wrapper">
			<InputLabel className={classes.pos}>Trigger Status</InputLabel>
		  	
			<FormControl className={classes.margin}>
			  
				<NativeSelect
				id="select-trigger"
				value={onTS.value}
				onChange={onTS.onEvent.bind(this)}
				input={<BootstrapInput10Rem />}>
					<option value="" disabled>
						Select...
					</option>
					<option value={1}>All</option>
					<option value={2}>OPEN</option>
					<option value={3}>CLOSED</option>
				</NativeSelect>
			</FormControl>
		
		</div>

		<div className="field-wrapper">
		
			<InputLabel className={classes.pos}>Trigger Type</InputLabel>
		  	
			<FormControl className={classes.margin}>
			  
				<NativeSelect
				id="demo-customized-select-native"
				value={onTriggerType.value}
				onChange={onTriggerType.onEvent}
				input={<BootstrapInput18Rem />}>
					<option value="" disabled>
						Select...
					</option>
					<option value={10}>one</option>
					<option value={20}>two</option>
					<option value={30}>Three</option>
					<option value={30}>Four</option>
				</NativeSelect>
			</FormControl>

		</div>
	  </form>
	</div>
  );
}
