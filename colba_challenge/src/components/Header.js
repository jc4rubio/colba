import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
   
    orderOverview = () =>  { /*TODO: Handling events*/
        console.log('Click!'); 
        // alert('Hello from Header.js');
    }

    render() {
      return (
        <header>
          <div className="container">
            <div className="row my-3">
              <div className="col">
                <img src="./images/jarowa_plus.png" alt="Jarowa"></img> {/*TODO: Responsive */}
              </div>
              <div className="col">
                <div className="float-right">
                  <div className="dropdown">
                    <button className="btn btn-light dropdown-toggle" type="button" data-toggle="dropdown" onClick={this.orderOverview()}>Order Overview {/*TODO*/}
                    <span className="caret"></span></button>
                    <ul className="dropdown-menu">
                      <li><a href="#!">Lawyer Lawyer</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>         
      );
    }
}

export default Header;
