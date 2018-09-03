import React, { Component } from 'react';
// import logo from './logo.svg'; // Never used
import './App.css';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
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
        <Header /> 
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
        <Footer />
      </div>
    );
  }
}

export default App;
