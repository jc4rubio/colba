import React, { Component } from 'react';
// import logo from './logo.svg'; // Never used
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Services from './components/Services';

class App extends Component {

  // NavigationButtons
  showAlert = (id, msg) => {
    alert(`Click on "${msg}" (Button id: ${id})`);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          
          <div className="container">
            
            {/* Navigation? */}
            <div className="row my-4 justify-content-between"> {/* Navigation? */}
              <div className="col-3 border-bottom border-success border-3">
                <h2>PROFILE</h2>
              </div>
              <div className="col-9 border-bottom border-black">
                <div className="float-right">
                  <button type="button" className="btn btn-light navigation_buttom" id="btn1" onClick={this.showAlert.bind(this, "btn1","Back")}>Back</button> {/*TODO*/}
                  <button type="button" className="btn btn-light navigation_buttom mx-1" id="btn2" onClick={this.showAlert.bind(this, "btn2","Edit profile")}>Edit profile</button> {/*TODO*/}
                  <button type="button" className="btn btn-light navigation_buttom" id="btn3" onClick={this.showAlert.bind(this, "btn3","Edit offer")}>Edit offer</button> {/*TODO*/}
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-7">
                <Profile />
              </div>
              <div className="col-5">
                <Services />
              </div>
            </div>

          </div>

        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
