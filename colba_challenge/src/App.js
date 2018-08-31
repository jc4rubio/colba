import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header.js';
import Profile from './components/Profile';
import Services from './components/Services';
import Languages from './components/Languages';
import GeographicalCover from './components/GeographicalCover';
import Qualifications from './components/Qualifications';
import BankAccount from './components/BankAccount';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header /> 
        </header>
        <main>
          {/* --Content-- */}
          <div className="grid-container">
            <div className="grid-item1">
              <Profile />
            </div>
            <div className="grid-item2">
              <Services />
            </div>
            <div className="grid-item3">
              <Languages />
            </div>
            <div className="grid-item4">
              <Qualifications />
            </div>
            <div className="grid-item5">
              <GeographicalCover/>
            </div>
            <div className="grid-item6">
              <BankAccount />
            </div>
          </div>

        </main>
        <footer>
          <hr/>
          <p className="left">Copyright&copy; 2018 JAROWA AG</p>
          <p className="right"><a href="#!" >Help</a> | <a href="#!">Report error</a></p>
        </footer>
        </div>
    );
  }
}

/* <div className="row">
            <div className="col-span2">
              <p align="left">Copyright&copy; 2018 JAROWA AG </p> 
            </div>
            <div className="col-span2">
            <p align="right"><a>Help</a> | <a>Report error</a></p> 
            </div> */

export default App;

/*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          JAROWA  Order Overview (Desplegable)
          PROFILE Botones x3
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/
