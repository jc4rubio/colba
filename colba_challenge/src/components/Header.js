import React from 'react';
import HeaderDropdown from './HeaderDropdown';

import './Header.css';

const Header = () => {

  return (
    <header>
      <div className="container">
        <div className="row my-3 justify-content-between">
          <div className="col-6">
            <img className="img-fluid header_logo" src="./images/jarowa_plus.png" alt="Jarowa"></img>
          </div>
          <div className="col-6">
            <HeaderDropdown />
          </div>
        </div>
      </div>
    </header>

  );
}

export default Header;
