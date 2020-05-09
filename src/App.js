import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Timers from './components/timers/timers.component';
import Navbar from './components/nav/nav.component';
import ButtonAppBar from './components/nav/appbar/appbar.component';

// Redux
import {  useSelector }  from 'react-redux';

// Utils
import * as shared from './shared/constants';


function App() {

	const state = useSelector(state => state.nav);

	const getClass = () => {
		return state.menuStatus === shared.LABEL_CLOSE ? 'appbar-section_close' : 'appbar-section_open';
	}

  return (
    <div className="app-container">
		<div className="body-section">
			<Router>
				<div className={getClass()} >
					<ButtonAppBar />
				</div>
				<div className="app-route-section">
				<Navbar/>
				<Switch>
					<Route path="/" exact />
					<Route path="/timers" component={Timers} />
				</Switch>
				</div>
			</Router>
		</div>
    </div>
  );
}

export default App;
