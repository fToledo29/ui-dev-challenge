import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import * as selectConfig from './config-select';
import InputLabel from '@material-ui/core/InputLabel';
// Redux
import {  useSelector, useDispatch }  from 'react-redux';
import { 
	selectSource,
	enterPrimaryID,
	selectTriggerStatus,
	selectTriggerType
} from '../../../../actions';
// Utils
import * as shared from '../../../../shared/constants';
import * as options from '../../../../shared/options'
// Styles
import './search-parameters.component.css';

const useStyles = makeStyles((theme) => ({
  root: {
	'& > *': {
	  margin: theme.spacing(1),
	  width: 'inherit'
	},
  },
  pos: {
	marginBottom: 12,
	color: shared.USESTYLES.blueLabel,
  },
  backGroundField: {
	backgroundColor: '#fff',
  },
}));





export default function SearchParameters() {

	const classes = useStyles();

	const BootstrapInput18Rem = selectConfig.getBootstrapInput('18rem');

	const BootstrapInput10Rem = selectConfig.getBootstrapInput('10rem');

	const state = useSelector(state => state.timers);
	  
	const dispatch = useDispatch();


	const change = (event, action) => {
		dispatch(action(event.target.value));
	};

	const getOptions = (data) => {
		return data.map((item, index) => 
			<option value={item} key={index}>
				{item}
			</option>
		);
	}


	return (
		<div>
			<form 
			className={classes.root}
			noValidate autoComplete="off">
				<div className="field-wrapper">
					
					<InputLabel className={classes.pos}>Source</InputLabel>

					<FormControl className={classes.margin}>
					
						<NativeSelect
						id="select-source"
						value={state.searchParameters.source}
						onChange={(e) => change(e, selectSource)}
						input={<BootstrapInput10Rem />}>
							<option value="" key={0}>
								Select...
							</option>
							{getOptions(options.source)}
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
					value={state.searchParameters.primaryId || ''}
					onChange={(e) => change(e, enterPrimaryID)}
					/>

				</div>

				<div className="field-wrapper">
					<InputLabel className={classes.pos}>Trigger Status</InputLabel>
					
					<FormControl className={classes.margin}>
						
						<NativeSelect
						id="select-trigger"
						value={state.searchParameters.triggerStatus}
						onChange={(e) => change(e, selectTriggerStatus)}
						input={<BootstrapInput10Rem />}>
							<option value="" key={0}>
								Select...
							</option>
							{getOptions(options.triggerStatus)}
						</NativeSelect>
					</FormControl>
				
				</div>

				<div className="field-wrapper">
				
					<InputLabel className={classes.pos}>Trigger Type</InputLabel>
					
					<FormControl className={classes.margin}>
						
						<NativeSelect
						id="demo-customized-select-native"
						value={state.searchParameters.triggerType}
						onChange={(e) => change(e, selectTriggerType)}
						input={<BootstrapInput18Rem />}>
								<option value="" key={0}>
								Select...
							</option>
							{getOptions(options.triggerType)}
						</NativeSelect>
					</FormControl>

				</div>
			</form>
		</div>
	);
}
