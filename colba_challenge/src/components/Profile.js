import React, { Component } from 'react';
import './profile.css';

class Profile extends Component {
   render() {
       return (
           <div>
               <div className=".container">
                    <div className="row">
                        <div className="col">
                            <img src="./images/business-man_profile.jpg" className="rounded-circle profile-picture" alt="profile"></img>
                        </div>
                        <div className="col text-left">
                            {/* Next step: Data from a service */}
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
}

export default Profile;
