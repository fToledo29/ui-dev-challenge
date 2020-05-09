import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import allReducers from  './reducers';
import { Provider, connect }  from 'react-redux';
import { setOperation } from './actions';
// import {  useSelector, useDispatch }  from 'react-redux';

const store = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	// const dispatch = useDispatch();

	const mapDispatchToProps = dispatch => {
		console.log('On set Operations');
		return {
		  onChangeOperation: name => dispatch(setOperation(name))
		};
	}

	const mapStateToProps = state => state;

	const Main = connect(
		mapStateToProps,
		mapDispatchToProps,
	  )(App);



ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
				<Main />
		</Provider>
	</React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
