import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './JobPostings.css';

class JobPostings extends React.Component {
    constructor() {
        super();
        this.state = {
            // Store all of the jobs
            jobs: []
        }
    }

    componentDidMount() {
        // Get all the jobs
        axios
            .get('https://divercity-test.herokuapp.com/jobs')
            .then(res => {
                let jobs = res.data.jobs;
                console.log(jobs)
                this.setState({ jobs: jobs })
            })
    }

    render() {
        return (
            <div className="jobs__container">
                {
                    this.state.jobs.map((jobs, index) => {
                        return (
                            <div key={jobs.id} className="jobs__listing">
                                <div className="jobs__listing_left">
                                    <h2>{jobs.title}</h2>
                                    <h3>{jobs.job_type}</h3>
                                    <h3>{jobs.company} • {jobs.location === undefined ? 'Remote' : jobs.location}</h3>

                                    <ul>
                                        {jobs.skills_tag.map((skill, index) =>
                                            <li key={index}>{skill}</li>
                                        )}
                                    </ul>
                                </div>

                                <div className="jobs__listing_right">
                                    <p><em>Amount Applied: {jobs.applicant_count}</em></p>
                                    <Link to={{ pathname: `/jobs/${jobs.id}`, state: this.state.jobs[jobs.id - 1] }}>
                                        <button>Apply</button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}

            </div>
        )
    }
}

export default JobPostings;