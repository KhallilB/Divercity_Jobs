import React from 'react';
import './Signup.css';

import AuthService from '../../../services/AuthService';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            name: '',
            password: '',
            passwordConfirm: '',
        }
        this.Auth = new AuthService();
    }

    render() {
        let { username, name, password, passwordConfirm } = this.state;

        return (
            <div>
                <h1>Signup Works</h1>
            </div>
        )
    }
}

export default SignUp;