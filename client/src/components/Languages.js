import React from 'react';
import axios from 'axios';

import Language from './Language.js';
import languages_Mock from '../mock_data/profile.json';
import './Profile.css';

class Languages extends React.Component {

    constructor() {
        super();
        this.languages = "";
        this.state = {
            isdataAvailable: false // TODO: What to do if data isn't available -> No render?
        }
    }

    /* HERE: There is a problem with Lifecycle. I'm doing something wrong. Render is done before that axios get*/
    componentDidMount() {
        console.log('Step 1');
        axios.get(`http://127.0.0.1:5000/api/languages`)
          .then(res => {

            if (res.status === 200) {
                console.log('-> Languages info comes from API REST');
                this.languages = res.data;
                this.setState({ isdataAvailable: true });
            } else {
                // TODO: Handle data availability
                console.warn('-> API REST doesn\'t work. Languages info is mock!');
                //this.languages = res.languages_Mock;
                this.setState({ isdataAvailable: false });
            }
            //console.log('Aquí si?');
            //console.log(this.languages[0].language);
        });
    }
    
    render() {
        console.log('Step 2');
        //console.log('Aquí no?');
        console.log(this.languages[0]);
        // console.log(this.languages[0].level);
            // console.log(this.state.languages[0].language);
            // console.log(this.state.languages[0].level);
            // console.log(this.state.languages[0].description);
        return (
            <div className="container mt-1 pb-2">
                <div className="h5 sectionTitle">LANGUAGES</div>
                <div className="row justify-content-start"> {/* TODO: Add languages dinamically*/}
                    <div className="col-4"><Language language={this.languages[0]}/></div>
                    {/* <div className="col-4"><Language language={this.state.languages[1].language} level={this.state.languages[1].level} description={this.state.languages[1].description}/></div> */}
                </div>
            </div>
        );
    }

}

export default Languages;
