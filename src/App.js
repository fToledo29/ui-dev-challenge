import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// import  HeaderComponent from './components/header/header.component';
import Timers from './components/timers/timers.component';
import Navbar from './components/nav/nav.component';

function App() {
  return (
    <div>
      <Navbar/>
      {/* <HeaderComponent></HeaderComponent> */}
      <Router>
        <Switch>
          <Route path="/" component={Timers} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
