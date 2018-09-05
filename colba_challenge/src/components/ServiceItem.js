import React, { Component } from 'react';

class ServiceItem extends Component {
    
    /*constructor(serviceItem) {
        super();
        this.category = serviceItem.category;
        /*this.services = {
            name,
            fee,
            currency,
            rate
        };
        this.status;
    }*/

    constructor() {
        super();
        this.services = {
            name : 'Servicio 1',
            rate : 5
        }
        this.status = 'Hide';
    }



    render() {

        return (
            <div>
                <div><p> Name: {this.services.name}</p><p>{this.status}</p></div>
                <div> Rate: {this.services.rate}</div>
                <div> Rate: {this.services.rate}</div>
            </div>
            
        );
    }
}

export default ServiceItem;
