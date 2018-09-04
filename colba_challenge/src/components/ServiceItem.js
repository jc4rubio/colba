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
        this.state;
    }*/

    constructor() {
        super();
        this.services = {
            name : 'Servicio 1',
            rate : 5
        }
    }



    render() {

        return (
            <div>
                <div> Name: {this.services.name}</div>
                <div> Rate: {this.services.rate}</div>
            </div>
            
        );
    }
}

export default ServiceItem;
