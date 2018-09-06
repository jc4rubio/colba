import React, { Component } from 'react';

import './Services.css';

import ServiceItem from './ServiceItem.js';
import { all_services } from '../mock_data/profile.json'

class Services extends Component {
    
    constructor() {
        super();
        this.services = all_services;
        this.nservices = all_services.length;

    }
    
    render() {
        return (
            <div className="container services_container pt-4">
                <h3>Services</h3>
                {/* Section I */}
                <span className="sectionTitle">Construction and Real Estate Law</span>
                {/* Service Items: */}
                <div className="row mt-1">
                    <div className="col-12">
                        <ServiceItem />
                    </div>
                </div>
                {/* Section II */}
                <span className="sectionTitle">Labour law</span>
                <div className="row mt-1">
                    <div className="col-12">
                        <ServiceItem />
                    </div>
                </div>
                {/* Section III */}
                <span className="sectionTitle">Social insurance law</span>
                <div className="row mt-1">
                    <div className="col-12">
                        <ServiceItem />
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Services;
