import React, { Component} from 'react';
import { Icon } from '../Icon';

class Alert extends Component {
    render() {
        const { type, text, className} = this.props;
        const classNames = "alert alert-" + type + " " + className;

        return (
            <div className={classNames}>
                {
                    type === 'info' ? (
                        <Icon name="fa fa-info"/>
                    ) : (
                        <Icon name="fa fa-warning"/>
                    )
                }
                <span className="alert-text">{text}</span>
            </div>
        );
    }
}

export default Alert;