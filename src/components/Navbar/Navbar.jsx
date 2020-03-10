import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import AuthService from '../../services/AuthService';
import './Navbar.css';

import DivercityLogo from '../../assets/divercity-logo.png';


class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false
        }
        this.Auth = new AuthService();
    }

    componentDidMount() {
        let loggedIn = this.Auth.loggedIn();
        this.setState({ loggedIn });
    }

    logout = () => {
        this.Auth.logout();
        if (!this.Auth.loggedIn()) {
            return window.location = '/';
        }
    }

    render() {
        let { loggedIn } = this.state;
        return (
            <div className="navbar_container">
                <Link to="/"><img src={DivercityLogo} alt="Divercity" /></Link>
                <div className="navbar__links_container">
                    {loggedIn ?
                        <ul className="navbar__links">
                            <Link to="/jobs"><li>Jobs</li></Link>
                            <Link><li onClick={this.logout}>Logout</li></Link>
                        </ul> :
                        <ul className="navbar__links">
                            <Link to="/jobs"><li>Jobs</li></Link>
                            <Link to="/auth/signup"><li>Sign Up</li></Link>
                            <Link to="/auth/login"><li>Log In</li></Link>
                        </ul>}
                </div>
            </div >
        )
    }
}

export default Navbar;