import React, { Component } from 'react';
// import logo from './logo.svg'; // Never used
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Services from './components/Services';

class App extends Component {

  constructor() {
    super();
    this.section_title = React.createRef();
  }

  // NavigationButtons
  changeTitle = (id, msg) => {
    
    switch(id){
      case "btn1":
        if (this.section_title.current.textContent === 'PROFILE') {
          this.section_title.current.textContent = "HOME";
        } else {
          this.section_title.current.textContent = "PROFILE";
        }
        break;
      case "btn2": 
        this.section_title.current.textContent = "EDIT PROFILE";
        break;
      case "btn3": 
        this.section_title.current.textContent = "EDIT OFFER";
        break;
      default: 
        this.section_title.current.textContent = "PROFILE";
    }

  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          
          <div className="container">
            
            {/* Navigation? */}
            <div className="row my-4 justify-content-between">
              <div className="col-3 border-bottom border-success border-3">
                <h2 ref={this.section_title}>PROFILE</h2>
              </div>
              <div className="col-9 border-bottom border-black">
                <div className="float-right">
                  <button type="button" className="btn btn-light navigation_buttom" id="btn1" onClick={this.changeTitle.bind(this, "btn1","Back")}>Back</button> {/*TODO*/}
                  <button type="button" className="btn btn-light navigation_buttom mx-1" id="btn2" onClick={this.changeTitle.bind(this, "btn2","Edit profile")}>Edit profile</button> {/*TODO*/}
                  <button type="button" className="btn btn-light navigation_buttom" id="btn3" onClick={this.changeTitle.bind(this, "btn3","Edit offer")}>Edit offer</button> {/*TODO*/}
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-7 col- col-sm-12">
                <Profile />
              </div>
              <div className="col-md-5 col-sm-12">
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
