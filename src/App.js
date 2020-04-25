import React from 'react';
import logo from './logo.svg';
import './App.css';
import  HeaderComponent from './components/home/header/header.component';
import Timers from './components/home/timers/timers.component';

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


          Edit <code>src/App.js</code> and save to reload.
        
          Learn React
          <Timers />
      </header>
    </div>
  );
}

export default App;
