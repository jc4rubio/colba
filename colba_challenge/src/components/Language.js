import React, { Component } from 'react';

import './Language.css';

//import { languages } from '../mock_data/profile.json';

class Language extends Component {

    constructor(props) {
        super(props);
        this.language = props.language;
        this.description = props.description;
        this.level = props.level;
    }

    renderLevel = () => {
        
        return (
            <div>
                <span className="rounded bg-success">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;
            </div>
        );
    }

    render () {
        return (
            <div className="container text-center">
                <div className="col-12 small">
                    {this.description}
                </div>
                <div className="col-12 col-align-self-start">
                    {/*TODO: Iterate depending on level*/}
                    <div className="row my-2 justify-content-around">
                        <div className="col-3 box rounded level"></div>
                        <div className="col-3 box rounded level"></div>
                        <div className="col-3 box rounded level"></div>
                    </div>
                </div>
                <div className="col-12 my-3">
                    {this.language}
                </div>
            </div>
        );
    }

}

export default Language;