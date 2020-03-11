import React from 'react';
import { Redirect } from 'react-router-dom';
import AuthService from '../../../services/AuthService';

import './Login.css';

class LogIn extends React.Component {
    constructor() {
        super();
        this.state = {
            // Hold input information in state
            username: '',
            password: '',

            // Checks the status of the response
            status: null,
            // Checks if the user is already logged in
            loggedIn: false
        }
        this.Auth = new AuthService();
    }

    componentDidMount() {
        let loggedIn = this.Auth.loggedIn();
        this.setState({ loggedIn })

        if (this.state.registered) {
            return (
                <Redirect from={{ pathname: "/auth/login" }} to={{ pathname: "/jobs" }} />
            )
        }
    }

    // Handle user inputs set them to the state values
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    // Submit form information
    submitForm = async event => {
        event.preventDefault();

        const { username, password } = this.state;

        let status = await this.Auth.logIn(username, password)
        this.setState({ status });
        if (status === 200) {
            window.location = '/jobs';
        }
    };



    render() {
        let { username, password } = this.state;

        return (
            <div className="login__container">
                {this.state.registered ?
                    <Redirect to={{ pathname: '/jobs' }} /> :
                    <form className="login__form" onSubmit={this.submitForm}>
                        <h1>Welcome Back!</h1>
                        <input
                            type="username"
                            placeholder="Username"
                            name="username"
                            value={username}
                            onChange={this.handleChange}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                        <div>
                            <button type="submit" value="submit" onClick={this.redirectUser}>Log In</button>
                        </div>
                    </form>}
            </div>
        )
    }
}

export default LogIn;