import React, { Component } from 'react';
import './Profile.css';

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
            <div className="row border-bottom border-1">
                <div className="col-5">
                    <img src="./images/business-man_profile.jpg" className="rounded-circle .img-fluid. profile-picture" alt="profile"></img>
                </div>
                <div className="col-6 text-left">
                    <p className="font-weight-bold">{this.personal_info.title} {this.personal_info.name}</p>
                    {/* Male icon: &#9794; Female icon: &#9792; Note: I choose female icon to do a correct binding to the template (picture of reference for this challenge), but the user is a man (male)*/}
                    <p><span className="border rounded ageBox px-2 py-1">&#9792;&nbsp;{this.personal_info.age}&nbsp;Years</span></p> {/* TODO: Choose gender icon depending on user data*/}
                    <p><span className="mb-2 font-weight-bold">{this.personal_info.fullName}</span></p>
                    <p><span className="small">{this.personal_info.address}</span></p>
                    <p>&#9742;&nbsp;<span className="small">{this.personal_info.phone1} {this.personal_info.phone2}</span></p> {/* TODO: Use a more beautiful library for icons */}
                    <p>&#9993;&nbsp;<a href="mailto:{this.personal_info.mail}">{this.personal_info.mail}</a></p> {/* TODO: Insert js object into jsx string*/}
                    <p>&#9993;&nbsp;<a href= "#!">{this.personal_info.website}</a></p> {/*TODO: www icon*/}
                </div>
                <div className="col-1">
                   {this.renderStatusButtom()} {/*TODO*/}
                </div>
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
