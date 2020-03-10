import React from 'react';
import { Redirect } from 'react-router-dom';
import AuthService from '../../../services/AuthService';

import './Login.css';

class LogIn extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            status: null,
            loggedIn: false
        }
        this.Auth = new AuthService();
    }

    componentDidMount() {
        let loggedIn = this.Auth.loggedIn();
        this.setState({ loggedIn })

        if (this.state.registered) {
            return (
                <Redirect from={{ pathname: "/auth/  " }} to={{ pathname: "/jobs" }} />
            )
        }
    }

    // Handle user inputs
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });

        console.log(this.state);
    };

    // Submit form information
    submitForm = async event => {
        event.preventDefault();

        const { username, password } = this.state;

        let status = await this.Auth.logIn(username, password)
        this.setState({ status });
    };

    redirectUser = event => {
        window.location.href("/jobs")
    }


    render() {
        let { username, password } = this.state;

        return (
            <div>
                <h1>Log In</h1>
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
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                        <button type="submit" value="submit" on onClick={this.redirectUser}>Submit</button>
                    </form>}
            </div>
        )
    }
}

export default LogIn;