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
                <div className="job__card">
                    <div className="job__card_top">
                        <h1>{job.title}</h1>
                        <h2>{job.company} • {job.location}</h2>

                        <ul>
                            {job.skills_tag.map((skill, index) =>
                                <li key={index}>{skill}</li>
                            )}
                        </ul>
                    </div>
                    <div className="job__card_middle">
                        <h3><u>Job Description</u></h3>
                        <h3>{job.description}</h3>
                    </div>
                    <div>
                        {this.state.loggedIn ?
                            <Link to={`/jobs/${job.id}/apply`}>
                                Apply
                        </Link> :
                            <h1>Please <Link to="/auth/login">Log In</Link> to apply to this job</h1>}
                    </div>
                </div>

            </div>
        )
    }
}

export default ExpandedJobs;