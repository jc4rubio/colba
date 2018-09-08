import React from 'react';

import './Footer.css';

const Footer = () => {

    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row justify-content-between my-2 row border-top border-2 pt-2">
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

export default Footer;
