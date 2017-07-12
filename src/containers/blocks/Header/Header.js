import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Search from '../../forms/Search';
import Field from '../../../components/Field';
import { Icon } from '../../../components/Icon';

import { userActions, queryActions } from '../../../actions';
import { CONTACTS } from '../../../constants';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classNames: "header-bottom",
            showMobileMenu: false
        };
    }

    onLogOut = (e) => {
        e.preventDefault();
        this.props.dispatch(userActions.userLoggedOut());
    };

    onOpenForm = (e) => {
        e.preventDefault();
        this.props.dispatch(userActions.userOpenedForm());
    };

    resizeSearchPanel = () => {
        if (window.pageYOffset > 0) {
            this.setState({
                classNames: "header-bottom header-bottom_small"
            });
        } else {
            this.setState({
                classNames: "header-bottom"
            });
        }

        if (this.state.showMobileMenu) {
            this.setState({
                showMobileMenu: !this.state.showMobileMenu
            });
        }
    };

    toggleMobileMenu = () => {
        if (this.props.query.showMobileSearch) {
            this.toggleSearch();
        }

        this.setState({
            showMobileMenu: !this.state.showMobileMenu
        });
    };

    toggleSearch = () => {
        this.props.dispatch(queryActions.toggleMobileSearch());
    };

    componentDidMount() {
        window.addEventListener('scroll', this.resizeSearchPanel);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.resizeSearchPanel);
    }

    render() {
        const { userLoggedIn, isFormActive, userName } = this.props.user;

        return (
            <header className="header">
                <div className="header-top">
                    <div className="login-holder">
                        {
                            userLoggedIn ?
                                (
                                    <div>
                                        <span className="user-holder"><Icon name="fa fa-user"/>{userName}</span>
                                        <Field name="logout" clickHandler={this.onLogOut} />
                                    </div>
                                ) : (
                                    !isFormActive &&
                                    <Field name="activateForm" clickHandler={this.onOpenForm} text="Увійти" />
                                )
                        }
                    </div>
                    <div className="phone-number">
                        <Icon name="fa fa-phone"/>
                        {CONTACTS.phone}
                    </div>
                </div>
                <div className={this.state.classNames}>
                    <nav>
                        <ul>
                            <li className={"link " + (this.state.showMobileMenu && !this.props.query.showMobileSearch ? "mobile" : "")}
                                onClick={()=> this.setState({showMobileMenu: false})}>
                                <Link to="/" activeClassName={this.props.path === '/' ? "active" : ""} >Головна</Link>
                            </li>
                            <li className={"link " + (this.state.showMobileMenu && !this.props.query.showMobileSearch ? "mobile" : "")}
                                onClick={()=> this.setState({showMobileMenu: false})}>
                                <Link to="/best" activeClassName="active">Кращі майстри</Link>
                            </li>
                            <li className={"link " + (this.state.showMobileMenu && !this.props.query.showMobileSearch ? "mobile" : "")}
                                onClick={()=> this.setState({showMobileMenu: false})}>
                                <Link to="/projects" activeClassName="active">Проекти</Link>
                            </li>
                            <li className={"link " + (this.state.showMobileMenu && !this.props.query.showMobileSearch ? "mobile" : "")}
                                onClick={()=> this.setState({showMobileMenu: false})}>
                                <Link to="/about" activeClassName="active">Про нас</Link>
                            </li>
                            <li className={"link " + (this.state.showMobileMenu && !this.props.query.showMobileSearch ? "mobile" : "")}
                                onClick={()=> this.setState({showMobileMenu: false})}>
                                <Link to="/contacts" activeClassName="active">Контакти</Link>
                            </li>
                            <Field isShown={this.state.showMobileMenu} name="mobileMenu" onClick={this.toggleMobileMenu} />
                            {
                                this.props.path !== '/best' && this.props.path !== '/projects' ?
                                <Field name="search" className="collapse" searchHandler={this.toggleSearch} />
                                : null
                            }

                        </ul>
                    </nav>
                    {
                        this.props.path !== '/best' && this.props.path !== '/projects' ?
                            <Search /> : null
                    }
                </div>
            </header>
        );
    }
}

export default connect(store => ({ ...store }))(Header);