import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
   
    render() {
       return (
        <footer>
          <hr/>
          <p className="left">Copyright&copy; 2018 JAROWA AG</p>
          <p className="right"><a href="#!" >Help</a> | <a href="#!">Report error</a></p>
        </footer>
            
       );
   }

}

export default Footer;
