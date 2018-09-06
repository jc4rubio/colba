import React, { Component } from 'react';

import './Language.css';


class Language extends Component {

    constructor(props) {
        super(props);
        this.language = props.language;
        this.description = props.description;
        this.level = props.level;
    }

    // This doesn't work! It's rendered before render and classes are not been applied: why??
    renderLevel = () => {

        //console.log('Level: '+this.level);
        var class_names=["levelWeak", "levelWeak", "levelWeak"];

        if (this.level === 1 || this.level === "1") { 
            class_names = ["levelStrong", "levelWeak", "levelWeak"]; // Level 1
        } else if (this.level === 2 || this.level === "2") {             
            class_names = ["levelStrong", "levelStrong", "levelWeak"]; // Level 2
        } else if (this.level === 3 || this.level === "3") {  
            class_names = ["levelStrong", "levelStrong", "levelStrong"]; // Level 3
        }

        return (
            <div>
                {
                    class_names.map((class_name, i) => {

                        return (
                            <div key={'my_key'+i} className={"col-3 box rounded level "+class_name}></div>
                        );
                    })
                }
            </div>
        );
    }

    // This do works!
    getClassName = (index) => {

        //console.log('Level: '+this.level);
        var class_names=["levelWeak", "levelWeak", "levelWeak"];

        if (this.level === 1 || this.level === "1") { 
            class_names = ["levelStrong", "levelWeak", "levelWeak"]; // Level 1
        } else if (this.level === 2 || this.level === "2") {             
            class_names = ["levelStrong", "levelStrong", "levelWeak"]; // Level 2
        } else if (this.level === 3 || this.level === "3") {  
            class_names = ["levelStrong", "levelStrong", "levelStrong"]; // Level 3
        }

        return (class_names[index]);
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

                        <div className={"col-3 box rounded level "+ this.getClassName(0)}></div>
                        <div className={"col-3 box rounded level "+ this.getClassName(1)}></div>
                        <div className={"col-3 box rounded level "+ this.getClassName(2)}></div>
                        {/* {this.renderLevel()} */} {/*TODO: To understand why this doesn't work fine*/}
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