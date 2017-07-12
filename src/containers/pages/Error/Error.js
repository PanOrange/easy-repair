import React, { Component } from 'react';
import Alert from '../../../components/Alert';

import { PHRASES } from '../../../constants';

class Error extends Component {
    render() {
        return (
            <main className="main">
                <div className="wrapper">
                    <Alert type="error" text={PHRASES.errorPage}/>
                </div>
            </main>
        );
    }
}

export default Error;