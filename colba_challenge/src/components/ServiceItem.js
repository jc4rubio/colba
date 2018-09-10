import React, { Component } from 'react';

import './ServiceItem.js';

class ContentLite extends Component {

    render() {
        return (
            <div className="row border-bottom border-1 py-2">
                <div className="col-4">{"(-) "+this.props.service.rate} Stars</div> {/* TODO: Stars*/}
                <div className="col-8 right"><span className="">{this.props.service.fee + " " + this.props.service.currency + " per hour"}</span></div> 
            </div>
        );
    }
}

class ContentComplete extends Component {

    render() {
        return(
            <div className="row py-3 mb-1" style={{backgroundColor: 'rgb(250, 250, 250'}}> 
                <div className="col-6">Fee</div>
                <div className="col-6 text-right"><span className="font-weight-bold">{this.props.service.fee + " " + this.props.service.currency + " per hour"}</span></div>
            </div>
        );
    }
}

export default class ServiceItem extends Component {
    
    constructor() {
        super();
       
        // Mock data
        this.service = {
            name : 'Servicio 1',
            fee : 35,
            currency: "CHF",
            rate: 5
        }

        this.state = {
            isShown: false,
        };
        
        this.operation_text = "Show";
        
        this.src_img_down = "/images/arrow1-down.png";
        this.src_img_up = "/images/arrow1-up.png";
        this.src_img = this.src_img_down;

    }

    toggleContent = () => {

        if(this.state.isShown) { 
            // Hide
            this.operation_text = "Show";
            this.src_img = this.src_img_down;
            
        } else { 
            // Shown
            this.operation_text = "Hide";
            this.src_img = this.src_img_up;
        }
        this.setState({ isShown: !this.state.isShown });
    }

    render() {

        return (
            <div className="container ">
                <div className="row">
                    <div className="col-6">{this.service.name}</div>
                    <div className="col-6 text-right">
                        <span className="font-weight-bold text-success" onClick={this.toggleContent}>
                            {this.operation_text} 
                            <img className="img-fluid ml-1" src={this.src_img} alt=""></img>
                        </span>
                    </div>
                </div>
                {this.state.isShown? <ContentComplete service={this.service}/> : <ContentLite service={this.service}/>}
            </div>   
        );
    }
}
