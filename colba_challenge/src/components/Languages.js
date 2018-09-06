import React, { Component } from 'react';

import './Profile.css';

import { languages } from '../mock_data/profile.json';

class Languages extends Component {

    constructor() {
        super();
        this.languages = languages;
    }

    render() {
        return (
            <div className="container mt-1 pb-2">
                <div className="h5 sectionTitle">Languages</div>
                <div className="row justify-content-start"> {/* TODO: Do it dinamically | Add level bars and description*/}
                    <div className="col-4">{this.languages[0].language}</div>
                    <div className="col-4">{this.languages[1].language}</div>
                </div>
            </div>
        );
    }

}

export default Languages;
