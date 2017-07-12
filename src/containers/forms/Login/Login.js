import React, { Component } from 'react';
import { connect } from 'react-redux';
import Field from '../../../components/Field';

import { userActions } from '../../../actions';

const initialState = {
    login: '',
    password: '',
    isSubmitted: false,
    isLoading: false
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    onCloseForm = (e) => {
        e.preventDefault();
        this.props.dispatch(userActions.userClosedForm());
        this.setState(initialState);
    };

    onLogout = () => {
        this.props.dispatch(userActions.userLoggedOut());
    };

    onSubmit = (e) => {
        e.preventDefault();
        if ( this.state.login.length > 0
            && this.state.password.length > 2 ) {
            this.props.dispatch(userActions.userLoggedIn(this.state));
            this.setState(initialState);
        }
    };

    render() {
        const { isFormActive } = this.props.user;
        const wrapClass = isFormActive ? "form-wrap active" : "form-wrap";
        const formClass = isFormActive ? "form-login active" : "form-login";

        return (
            <div>
                <div className={wrapClass} onClick={this.onCloseForm} />
                <form className={formClass}>
                    <fieldset>
                        <Field name="close" clickHandler={this.onCloseForm} />
                        <Field name="login" changeHandler={this.onChange} value={this.state.login} />
                        <Field name="password" changeHandler={this.onChange} value={this.state.password} />
                        <Field name="submit" submitHandler={this.onSubmit} text="Увійти" />
                    </fieldset>
                </form>
            </div>
        );
    }

}

export default connect(store => ({...store}))(Login);