import React, { Component } from 'react';
import './Profile.css';

import PersonalInfo from './PersonalInfo';
import Languages from './Languages';
import GeographicalCover from './GeographicalCover';
import Qualifications from './Qualifications';
import BankAccount from './BankAccount';

import { personal_info } from '../mock_data/profile.json';

class Profile extends Component {

    constructor() {
        super();
        this.personal_info = personal_info;
        if (personal_info.availability ==="Available") {
            this.available = 1;
        } else {
            this.available = 0;
        }
    }
   
//   I tried this way too but I can't render the availability box properly
  renderAvailabilityButtom = () => {

    // let buttonIcon; 
    let buttonText;
    let buttonClassName;
    const availability = this.personal_info.availability;
    let available;
    // let html_code;

    if (availability === "Available") {
        
        // buttonIcon = "&#x2714;";
        buttonText = availability; /* TO DO */
        buttonClassName = "status-btn btn btn-success float-right";
        available = true;
        
    }
    else {
        // buttonIcon = "&#9747;";
        buttonText = "Not available"; /* TO DO */
        buttonClassName = "status-btn btn btn-danger float-right";
    }
    // html_code = '<button  type="button" className='+{buttonClassName}+'>'+{buttonText}+'</button>'; /* TO DO */

    // return (<button  type="button" className={buttonClassName}>{{__html:buttonText}}</button>);
    // return (<div dangerouslySetInnerHTML={{__html: html_code}} />);
    return (<button  type="button" className={buttonClassName}>{available ? 'V':'X'}<br />{buttonText}</button>); /* TODO: How to insert HTML code into Jsx?? / How to convert String to Jsx elements?*/

  }
  
  render() {
      return (
        <div className="container">
          <div className="row border-bottom border-1">
                <PersonalInfo />
            </div>
            <div className="row border-bottom border-1">

                <div className="col-12">
                    <Languages />
                </div>
            </div>
            <div className="row border-bottom border-1">
                <div className="col-12">
                    <Qualifications />
                </div>
            </div>
            <div className="row border-bottom border-1">
                <div className="col-12">
                    <GeographicalCover/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <BankAccount />
                </div>
            </div>
        </div>
    );
    }
}

export default Profile;
