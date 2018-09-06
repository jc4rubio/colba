import React, { Component } from 'react';

import './Profile.css';

import { geographicalCover } from '../mock_data/profile.json';

class GeographicalCover extends Component { 

    constructor() {
        super();
        this.geographicalCover = geographicalCover;
    }
    
    render() {
        return (
            <div className="container mt-1 pb-2">
                <div className="h5 sectionTitle">GEOGRAPHICAL COVER</div>
                <div className="row">
                    <div className="col-5">Geographical cover:</div>
                    <div className="col-7 small">{this.geographicalCover.join(", ")}</div>
                </div>
            </div>
        );
    }
}

export default GeographicalCover;
