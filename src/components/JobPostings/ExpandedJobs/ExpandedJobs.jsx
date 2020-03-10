import React from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../../services/AuthService';
import './ExpandedJobs.css';

class ExpandedJobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            job: [],
            loggedIn: false
        }
        this.Auth = new AuthService();
    }

    componentDidMount() {
        let loggedIn = this.Auth.loggedIn()
        this.setState({ loggedIn })
    }

    render() {
        let job = this.props.location.state;
        return (
            <div className="job__container">
                <h1>{job.title}</h1>
                <h1>{job.company}</h1>
                <h1>{job.description}</h1>
                <div>
                    {this.state.loggedIn ?
                        <Link to={`/jobs/${job.id}/apply`}>
                            Apply
                        </Link> :
                        <h1><Link to="/auth/login">Log In</Link> to apply to this job</h1>}
                </div>
            </div>
        )
    }
}

export default ExpandedJobs;