import React, { Component } from 'react';
import './profile.css';

import Languages from './Languages';
import GeographicalCover from './GeographicalCover';
import Qualifications from './Qualifications';
import BankAccount from './BankAccount';

import { personal_info } from '../mock_data/profile.json'

class Profile extends Component {

    constructor() {
        super();
        this.personal_info = personal_info;

    }
   
    
   /*
    render() {
       return (
           <div>
               <div className=".container">
                    <div className="row">
                        <div className="col">
                            <img src="./images/business-man_profile.jpg" className="rounded-circle profile-picture" alt="profile"></img>
                        </div>
                        <div className="col text-left">
                            {/* Next step: Data from a service *//*}
                            <b>Name</b><button type="button" className="status-btn btn btn-success float-right">&#x2714;<br/>Available</button><br />
                            age<br />
                            fullName<br />
                            address<br />
                            phone1 phone2<br />
                            mail<br />
                            website
                        </div>
                    </div>
                </div>
                <hr />
           </div>
            
       );
    
   } 
   */
  renderStatusButtom = () => {

    let buttonIcon;
    let buttonText;
    let buttonClassName;
    const status = this.personal_info.status;
    let available;
    let html_code;

    if (status === "Available") {
        
        buttonIcon = "&#x2714;";
        buttonText = status; /* TO DO */
        buttonClassName = "status-btn btn btn-success float-right";
        available = true;
        
    }
    else {
        buttonIcon = "&#9747;";
        buttonText = "Not available"; /* TO DO */
        buttonClassName = "status-btn btn btn-danger float-right";
    }
    html_code = '<button  type="button" className='+{buttonClassName}+'>'+{buttonText}+'</button>'; /* TO DO */

    // return (<button  type="button" className={buttonClassName}>{{__html:buttonText}}</button>);
    // return (<div dangerouslySetInnerHTML={{__html: html_code}} />);
    return (<button  type="button" className={buttonClassName}>{available ? 'V':'X'}<br />{buttonText}</button>); /* TODO: How to insert HTML code into Jsx?? / How to convert String to Jsx elements?*/

  }
  
  render() {
    return (
        <div>
            <div className="row">
                <div className="col-5">
                    <img src="./images/business-man_profile.jpg" className="rounded-circle .img-fluid. profile-picture" alt="profile"></img>
                </div>
                <div className="col-5 text-left">
                    {/* Next step: Data from a service */}
                    <p className="font-weight-bold">{this.personal_info.title} {this.personal_info.name}</p>
                    <p>{this.personal_info.age}</p>
                    <p>{this.personal_info.fullName}</p>
                    <p>{this.personal_info.address}</p>
                    <p>{this.personal_info.phone1} {this.personal_info.phone2}</p>
                    <p>{this.personal_info.mail}</p>
                    <p>{this.personal_info.website}</p>
                </div>
                <div className="col-2">
                   {this.renderStatusButtom()} {/*TODO*/}
                </div>
            </div>
            <div className="row">

                <div className="col-12">
                    <Languages />
                </div>
                <div className="col-12">
                    <Qualifications />
                </div>
                <div className="col-12">
                    <GeographicalCover/>
                </div>
                <div className="col-12">
                    <BankAccount />
                </div>
            </div>
        </div>
    );
    }
}

export default Profile;
