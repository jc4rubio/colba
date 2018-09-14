import React, { Component } from 'react';

import './Services.css';

import ServiceItem from './ServiceItem.js';
import { all_services } from '../mock_data/profile.json'

class Services extends Component {
    
    constructor() {
        super();
        this.services = all_services;
        this.nservices = all_services.length;

        this.service = {
            name : 'Servicio 1',
            fee : 35,
            currency: "CHF",
            rate: 5
        }

        this.service0 = this.services[0].services[0];
        this.service1 = this.services[1].services[0];
        this.service2 = this.services[2].services[0];

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
                        <ServiceItem service={this.service0}/>
                    </div>
                </div>
                {/* Section II */}
                <span className="sectionTitle">Labour law</span>
                <div className="row mt-1">
                    <div className="col-12">
                        <ServiceItem service={this.service1}/>
                    </div>
                </div>
                {/* Section III */}
                <span className="sectionTitle">Social insurance law</span>
                <div className="row mt-1">
                    <div className="col-12">
                        <ServiceItem service={this.service2}/>
                    </div>
                    <div className="col-12">
                        <ServiceItem />
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Services;
