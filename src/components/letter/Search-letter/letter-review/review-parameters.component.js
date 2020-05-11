import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

// Redux
import {  useSelector, useDispatch }  from 'react-redux';
import { 
	enterLetterRequestFrom,
	selectLetterSource,
	enterLeterPrimaryID,
	enterLetterTo,
	enterLetterStatus,
	enterLetterBatchID,
	enterLetterDescription
} from '../../../../actions';
// Utils
import * as selectConfig from '../../../../shared/config-select';
import * as shared from '../../../../shared/constants';
import * as options from '../../../../shared/options'
// Styles
import './review-parameters.component.css';

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
	pickerLabel: {
		marginBottom: 0,
		color: shared.USESTYLES.blueLabel,
	},
	picker: {
		marginTop: '1px',
		marginBottom: 12,
		color: shared.USESTYLES.blueLabel,
	},
	pickerField: {
		marginTop: '12px',
		backgroundColor: '#fff',
		'& input': {
			height: '0.15em'
		}
	},
	backGroundField: {
	  	backgroundColor: '#fff',
	},
}));
  

const ReviewParametersComponent = () => {

	const classes = useStyles();

	const BootstrapInput18Rem = selectConfig.getBootstrapInput('18rem');

	const BootstrapInput10Rem = selectConfig.getBootstrapInput('10rem');

	const letterState = useSelector(state => state.letter);
	  
	const dispatch = useDispatch();

	const onChangeDate = (value, action) => {
		const date = value.getDate();
		const month = value.getMonth() + 1;
		const year = value.getFullYear();
		const enteredDate = month + '/' + date + '/' + year ;
	
		console.log('Given Date: ', enteredDate);

		dispatch(action(enteredDate));
	}

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
						id="letter-select-source"
						value={letterState.searchParameters.source}
						onChange={(e) => change(e, selectLetterSource)}
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
					id="letter-primary-id"
					label="Primary ID"
					variant="outlined"
					size="small"
					value={letterState.searchParameters.primaryId || ''}
					onChange={(e) => change(e, enterLeterPrimaryID)}
					/>

				</div>

				<div className="field-wrapper">
					<InputLabel className={classes.pickerLabel}   required>Request Date from</InputLabel>
					<MuiPickersUtilsProvider
						className={classes.picker} 
						utils={DateFnsUtils}>
						<KeyboardDatePicker
						disableToolbar
						className={classes.pickerField}
						inputVariant="outlined"
						format="MM/dd/yyyy"
						margin="normal"
						id="letter-request-date-from-picker"
						value={letterState.searchParameters.requestDateFrom}
						onChange={(e) => onChangeDate(e, enterLetterRequestFrom)}
						KeyboardButtonProps={{
							'aria-label': 'change date',
						}}/>
					</MuiPickersUtilsProvider>
				</div>

				<div className="field-wrapper">
					<InputLabel className={classes.pickerLabel}  required>To</InputLabel>
					<MuiPickersUtilsProvider
						className={classes.picker} 
						utils={DateFnsUtils}>
						<KeyboardDatePicker
						disableToolbar
						className={classes.pickerField}
						inputVariant="outlined"
						format="MM/dd/yyyy"
						margin="normal"
						id="letter-request-date-to-picker"
						value={letterState.searchParameters.requestDateTo}
						onChange={(e) => onChangeDate(e, enterLetterTo)}
						KeyboardButtonProps={{
							'aria-label': 'change date',
						}}/>
					</MuiPickersUtilsProvider>
				
				</div>

				<div className="field-wrapper">
				
					<InputLabel className={classes.pos}>Status</InputLabel>
					
					<FormControl className={classes.margin}>
						
						<NativeSelect
						id="letter-status"
						value={letterState.searchParameters.satatus}
						onChange={(e) => change(e, enterLetterStatus)}
						input={<BootstrapInput18Rem />}>
								<option value="" key={0}>
								Select...
							</option>
							{getOptions(options.triggerType)}
						</NativeSelect>
					</FormControl>

				</div>

				<div className="field-wrapper">
				
					<InputLabel className={classes.pos}  required>Batch ID</InputLabel>
					<TextField
					height="25%"
					className={classes.backGroundField}
					id="letter-batch-id"
					label="Batch ID"
					variant="outlined"
					size="small"
					value={letterState.searchParameters.batchID || ''}
					onChange={(e) => change(e, enterLetterBatchID)}
					/>

				</div>

				<div className="field-wrapper">
				
					<InputLabel className={classes.pos}>Description</InputLabel>
					
					<FormControl className={classes.margin}>
						
						<NativeSelect
						id="letter-status"
						value={letterState.searchParameters.description}
						onChange={(e) => change(e, enterLetterDescription)}
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
};

export default ReviewParametersComponent;