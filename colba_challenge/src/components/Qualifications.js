import React, { Component } from 'react';

import './Profile.css';

import { qualifications } from '../mock_data/profile.json';

class Qualifications extends Component {

    constructor() {
        super();
        this.qualifications = qualifications;
    }

    render() {
        return (
            <div className="container mt-1 pb-2">
                <div className="h5 sectionTitle">Qualifications</div>
                <div className="row">
                    <div className="col-5">Lawyer's license</div>
                    <div className="col-7 small">{this.qualifications.lawyersLicense?'Yes':'No'}</div>
                </div>
                <div className="row">
                    <div className="col-5">Year of license:</div>
                    <div className="col-7 small">{this.qualifications.yearOfLicense}</div>
                </div>
                <div className="row">
                    <div className="col-5">QUALIFICATIONS:</div>
                    <div className="col-7 small">{this.qualifications.qualifications.join("\t")}</div> {/*TODO: Iterate over qualifications to replicate divs, better than join function maybe*/}
                </div>
            </div>
        );
    }
}

export default Qualifications;
