import React, { Component } from 'react';

import './ServiceItem.js';

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
            fee : 35,
            currency: "CHF",
            rate: 5
        }
        this.status = 'Hide';
    }

    /* TODO: Add functionality to span to toggle divs. That is, change span name; change icon; and toggle between div1 and div2*/

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">{this.services.name}</div>
                    {/* <div className="col-6 text-right"><span id={this.services.name} className="">Show</span></div> */}
                    <div className="col-6 text-right">
                        <span className="font-weight-bold text-success" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Show <img className="img-fluid" src="/images/arrow1-down.png" alt=""></img> {/*State 1: hidden (default) */}
                            Hide <img className="img-fluid" src="/images/arrow1-up.png" alt=""></img> {/*State 1: shown => TODO: Remove it*/}
                        </span>
                    </div>
                </div>
                {/* Div 1: Shown by default */}
                <div className="row visible">
                    <div className="col-4">{"(-) "+this.services.rate} Stars</div> {/* TODO: Stars*/}
                    <div className="col-8 right"><span className="feeShown">{this.services.fee + " " + this.services.currency + " per hour"}</span></div> 
                </div>
                {/* Div 2: Hidden by default */}
                <div className="row invisible">
                    <div className="col-6">Fee</div>
                    <div className="col-6 text-right"><span className="feeHidden">{this.services.fee + " " + this.services.currency + " per hour"}</span></div> 
                </div>
            </div>

            
        );
    }
}

export default ServiceItem;
