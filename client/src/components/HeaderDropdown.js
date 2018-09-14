import React, {Component} from 'react';

class HeaderDropdown extends Component {
    state = {
      isOpen: false
    };
  
    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  
    render() {
      const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
      return (
        <div className="dropdown float-right" onClick={this.toggleOpen}>
            <button className="btn btn-light dropdown-toggle" 
                type="button" 
                id="dropdownMenuButton" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false"     
            >
            Order Overview
            </button>
            <div className={menuClass} aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#nogo">
                Order
                </a>
                <a className="dropdown-item" href="#nogo">
                ...
                </a>
                <a className="dropdown-item" href="#nogo">
                Sign in
                </a>
            </div>
        </div>
      );
    }
  }

  export default HeaderDropdown;
