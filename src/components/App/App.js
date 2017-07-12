import React, { Component } from 'react';

import Header from '../../containers/blocks/Header';
import Footer from '../../containers/blocks/Footer';
import Login from '../../containers/forms/Login';
import Order from '../../containers/forms/Order';

class App extends Component {
    render() {
        const PATH = this.props.location.pathname;

        return (
            <div>
                <Header path={PATH} />
                <Login />
                <Order />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default App;