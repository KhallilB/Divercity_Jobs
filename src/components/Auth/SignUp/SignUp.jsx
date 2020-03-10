import React from 'react';
import './SignUp.css';

import { Redirect } from 'react-router-dom'

import AuthService from '../../../services/AuthService';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            name: '',
            password: '',
            passwordConfirm: '',
            status: null,
            registered: false
        }
        this.Auth = new AuthService();
    }

    componentDidMount() {
        let registered = this.Auth.loggedIn();
        this.setState({ registered })

        if (this.state.registered) {
            return (
                <Redirect from={{ pathname: "/auth/signup" }} to={{ pathname: "/jobs" }} />
            )
        }
    }

    // Handle user inputs
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    // Submit form information
    submitForm = async event => {
        event.preventDefault();

        const { username, name, password } = this.state;

        let status = await this.Auth.signUp(username, name, password)
        this.setState({ status });

        if (status === 200) {
            window.location = '/jobs';
        }
    };



    render() {
        let { username, name, password, passwordConfirm } = this.state;

        return (
            <div>
                <h1>Sign Up</h1>
                {this.state.registered ?
                    <Redirect to={{ pathname: '/jobs' }} />
                    : <form onSubmit={this.submitForm}>
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
                        <button type="submit" value="submit" onClick={this.redirectUser}>Submit</button>
                    </form>}
            </div>
        )
    }
}

export default SignUp;