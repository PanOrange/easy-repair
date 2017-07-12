import React, { Component } from 'react';
import {SocialIcon} from '../../../components/Icon';

import {CONTACTS} from '../../../constants';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-inner">
                    <div className="social">
                        <h2>Ми в мережі</h2>
                        <ul>
                            <li>
                                <SocialIcon name="fa fa-facebook" />
                            </li>
                            <li>
                                <SocialIcon name="fa fa-instagram" />
                            </li>
                            <li>
                                <SocialIcon name="fa fa-github" />
                            </li>
                            <li>
                                <SocialIcon name="fa fa-500px" />
                            </li>
                            <li>
                                <SocialIcon name="fa fa-envelope-o" />
                            </li>
                        </ul>
                    </div>
                    <div className="contact">
                        <div>{CONTACTS.street}</div>
                        <div>{CONTACTS.city} {CONTACTS.postbox}</div>
                    </div>
                    <div className="copyright">© 2017 PanOrange</div>
                </div>
            </footer>
        );
    }
}

export default Footer;