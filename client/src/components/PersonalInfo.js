import React from 'react';
import axios from 'axios';
import './Profile.css';
import { personal_info_MOCK } from '../mock_data/profile.json';


export default class PersonalInfo extends React.Component {

    constructor() {
        super();

        this.state = {
            personal_info: "",
            isdataAvailable: false // TODO: What to do if data isn't available -> No render?
        }     
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:5000/api/personal_info`)
          .then(res => {

            if (res.status === 200) {
                console.log('-> PersonalInfo data comes from API REST');
                this.setState({ personal_info: res.data, isdataAvailable: true });
            } else {
                // TODO: Handle data availability
                console.warn('-> API REST doesn\'t work. PersonalInfo data is mock!');
                this.setState({ personal_info: personal_info_MOCK, isdataAvailable: false });
            }
        });
    }

    renderAvailabilityButtom = () => {

        let buttonIcon; 
        let buttonText;
        let buttonClassName = "box rounded float-right px-2 text-white "; //availability_box";

        if (this.state.personal_info.availability === "Available") {            
            buttonIcon = <a>&#x2714;</a> /*V*/
            buttonText = "Available";
            buttonClassName += " bg-success";      
        }
        else {
            buttonIcon = <a>&#9747;</a> /*X*/
            buttonText = "Unavailable";
            buttonClassName += " bg-danger";
        }

        return (
            <div className={buttonClassName}>
                <span>{buttonIcon}</span><br/>
                <span className="small">{buttonText}</span>
            </div>
        );
    }

    getAgeIcon = (gender) => {
        
        let icon =<a>&#9794;</a>; // Default (male) -> Could be neutral
        
        if (gender === 'male') {
            icon = <a>&#9794;</a>; // Male icon
        } else if (gender === 'female') {
            icon = <a>&#9792;</a>; // Female icon
        }

        return icon;
    }

    render () {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-4 mx-0 px-0">
                        <img src="./images/business-man_profile.jpg" className="rounded-circle img-fluid profile-picture" alt="profile"></img>
                    </div>
                    <div className="col-6 text-left">
                        <p className="font-weight-bold">{this.state.personal_info.title} {this.state.personal_info.name}</p>
                        {/* Male icon: &#9794; Female icon: &#9792; Note: I choose female icon to do a correct binding to the template (picture of reference for this challenge), but the user is a man (male)*/}
                        <p><span className="border rounded ageBox px-2 py-1">{this.getAgeIcon(this.state.personal_info.gender)}&nbsp;{this.state.personal_info.age}&nbsp;Years</span></p> {/* TODO: Choose gender icon depending on user data*/}
                        <p><span className="mb-2 font-weight-bold">{this.state.personal_info.fullName}</span></p>
                        <p><span className="small">{this.state.personal_info.address}</span></p>
                        <p>&#9742;<span className="small ml-2">{this.state.personal_info.phone1} {this.state.personal_info.phone2}</span></p> {/* TODO: Use a more beautiful library for icons */}
                        <p>&#9993;<a className="ml-2" href={"mailto:"+this.state.personal_info.mail}>{this.state.personal_info.mail}</a></p>
                        <p>&#9883;<a className="ml-2" href= {this.state.personal_info.website}>{this.state.personal_info.website}</a></p>
                    </div>
                    <div className="col-2 px-2 mx-0 text-center">
                        {this.renderAvailabilityButtom()}          
                    </div>
                </div>
            </div>
        );
    }

}
