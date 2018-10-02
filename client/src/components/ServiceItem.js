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
    
    constructor(props) {
        super(props);
       
        // Doubt: When to use a property inside or outside of state: src_img / operation_text  
        this.operation_text = "Show"; // Default value (Show/Hide)
        this.src_img_down = "/images/arrow1-down.png"; // This can be rotated 180 degrees with CSS to avoid having two images
        this.src_img_up = "/images/arrow1-up.png";
        
        this.state = {
            isShown: false,
            src_img: this.src_img_down
        };

        // Default Service /* TODO: How to handle when there is no arguments/props?  */
        const default_service = {
            name : 'Default Service',
            fee : 5,
            currency: "€",
            rate: 1  
        }
        if(!props.service) {
            this.service = default_service;
        } else {
            this.service = props.service;
        }
    }

    toggleContent = () => {

        if(this.state.isShown) { 
            // Hide
            this.operation_text = "Show";
            this.setState({ src_img: this.src_img_down});
            //this.src_img = this.src_img_down;
            
        } else { 
            // Shown
            this.operation_text = "Hide";
            this.setState({ src_img: this.src_img_up});
            //this.src_img = this.src_img_up;
        }
        this.setState({ isShown: !this.state.isShown });
    }

    render() {
        return (
            <div className="container ">
                <div className="row">
                
                    <div className="col-9 text-truncate px-0">{this.service.name}</div>
                    <div className="col-3 text-right px-0">
                        <span className="font-weight-bold text-success text-nowrap toggleContent" onClick={this.toggleContent}>
                            {this.operation_text} 
                            <img className="img-fluid ml-1" src={this.state.src_img} alt=""></img>
                        </span>
                    </div>
                </div>
                {this.state.isShown? <ContentComplete service={this.service}/> : <ContentLite service={this.service}/>}
            </div>   
        );
    }
}
