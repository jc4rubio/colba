import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <footer>
                <hr/>
                <div className="container">
                    <div className="row justify-content-between my-2">
                        <div className="col">
                            <p>Copyright&copy; 2018 JAROWA AG</p>
                        </div>
                        <div className="col">
                            <p className="text-right"><a href="#!" >Help</a> | <a href="#!">Report error</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
