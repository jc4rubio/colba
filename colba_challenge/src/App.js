import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
          {/* There is another image, only with the icon (without the name 'JAROWA') */}

          {/* <div className="grid-container"> */}

          {/* <img src="./images/jarowa_plus.png" alt="Jarowa" className=".img-responsive"></img> */}
          
          <div className=".container">
            <div className="row">
                <div className="col left" align="left">
                  <img src="./images/jarowa_plus.png" alt="Jarowa" className=".img-responsive"></img>
                </div>
                <div className="col" align="right">
                  <div className="dropdown" >
                    <button className="btn btn-light dropdown-toggle" type="button" data-toggle="dropdown">Order Overview
                    <span className="caret"></span></button>
                    <ul className="dropdown-menu">
                      <li><a href="#!">Lawyer Lawyer</a></li>
                    </ul>
                  </div>
                </div>
            </div>
            <br/>
            <div className="row">
              <div className="col left">
                  <h2>PROFILE</h2>
                </div>
                <div className="col right">
                  <button type="button" className="btn btn-light">Back</button>&nbsp;
                  <button type="button" className="btn btn-light">Edit profile</button>&nbsp;
                  <button type="button" className="btn btn-light">Edit offer</button>
                </div>
            </div>
          </div>
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
