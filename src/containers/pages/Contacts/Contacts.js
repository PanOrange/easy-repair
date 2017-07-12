import React, { Component } from 'react';
import { CONTACTS } from '../../../constants';

class Contacts extends Component {
    render() {
        return (
            <main className="main">
                <div className="wrapper">
                    <h1>Наші контакти</h1>
                    <p>{CONTACTS.street}</p>
                    <p>{CONTACTS.city} {CONTACTS.postbox}</p>
                    <p>{CONTACTS.phone}</p>
                </div>
            </main>
        );
    }
}

export default Contacts;