import React, { Component } from 'react';

import './Profile.css';

import { bankAccount } from '../mock_data/profile.json';

class BankAccount extends Component {
    
    constructor() {
        super();
        this.bankAccount = bankAccount;
        console.log('Bank Acoount: '+this.bankAccount);
    }
    
    render() {
        return (
            <div className="container mt-1 pb-2">
                <div className="h5 sectionTitle">BANK ACCOUNT</div>
                <div className="row">
                    <div className="col-5">Owner:</div>
                    <div className="col-7 small">{this.bankAccount.owner}</div>
                </div>
                <div className="row">
                    <div className="col-5">IBAN:</div>
                    <div className="col-7 small">{this.bankAccount.IBAN}</div>
                </div>
                <div className="row">
                    <div className="col-5">VAT Number:</div>
                    <div className="col-7 small">{this.bankAccount.VAT}</div>
                </div>
            </div>
        );
    }
}

export default BankAccount;
