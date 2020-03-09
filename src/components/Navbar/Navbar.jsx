import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import DivercityLogo from '../../assets/divercity-logo.png';


class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="navbar_container">
                <Link to="/"><img src={DivercityLogo} alt="Divercity" /></Link>
                <div className="navbar__links_container">
                    <ul className="navbar__links">
                        <Link to="/jobs"><li>Jobs</li></Link>
                        <Link><li>Sign Up</li></Link>
                        <Link><li>Log In</li></Link>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;