import React, { Component } from 'react';

class SocialIcon extends Component {
    render() {
        return <a href={this.props.url} className={this.props.name} />;
    }
}

export default SocialIcon;