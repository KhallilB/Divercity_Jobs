import React from 'react';
import './SignUp.css';

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

    // Handle user inputs
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });

        console.log(this.state);
    };

    // Submit form information
    submitForm = event => {
        event.preventDefault();

        const { username, name, password } = this.state;

        this.Auth.signUp(username, name, password);
    };

    render() {
        let { username, name, password, passwordConfirm } = this.state;

        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.submitForm}>
                    <input
                        type="username"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="name"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="passwordConfirm"
                        value={passwordConfirm}
                        onChange={this.handleChange}
                    />
                    <button type="submit" value="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default SignUp;