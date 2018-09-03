import React, { Component } from 'react';
/*import '../index.css'; /* Provisional */
import './Header.css';

class Header extends Component {
   
    handleClick() {
        console.log('Click!');
        alert('Hello from Header.js');
    }
   
    render() {
       return (
        <header>
          <div className=".container">
            <div className="row">
                <div className="col left" align="left">
                  {/* There is another image, only with the icon (without the name 'JAROWA') */}
                  <img src="./images/jarowa_plus.png" alt="Jarowa" className=".img-responsive"></img>
                </div>
                <div className="col" align="right">
                  <div className="dropdown" >
                    <button className="btn btn-light dropdown-toggle" type="button" data-toggle="dropdown" onClick={this.doSomething()}>Order Overview
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
            
       );
   }

   doSomething(){};

   

}


export default Header;
