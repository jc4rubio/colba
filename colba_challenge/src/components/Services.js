import React, { Component } from 'react';

import ServiceItem from './ServiceItem.js';
import { all_services } from '../mock_data/profile.json'

class Services extends Component {
    
    constructor() {
        super();
        this.services = all_services;
        this.nservices = all_services.length;
        /*this.category;
        this.services = {
            name,
            fee,
            currency,
            rate
        };
        this.state;*/


    }

    render() {
        return (
            <div>
                <div>Services</div>
                <p>{this.services[0].category_name}</p>
                Mock: {this.nservices} <br />
                <ServiceItem />
            </div>
            
        );
    }
}

export default Services;
