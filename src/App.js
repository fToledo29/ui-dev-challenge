import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// import  HeaderComponent from './components/header/header.component';
import Timers from './components/timers/timers.component';
import Navbar from './components/nav/nav.component';
import ButtonAppBar from './components/nav/appbar/appbar.component';


function App() {
  return (
    <div className="app-container">
		<div className="appbar-section_open">
	  		<ButtonAppBar />
		</div>
		<div className="body-section">
			<Navbar/>
			<Router>
				<Switch>
				<Route path="/" component={Timers} />
				</Switch>
			</Router>
		</div>
    </div>
  );
}

export default App;
