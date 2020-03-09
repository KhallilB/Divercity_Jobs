import React from 'react';
import axios from 'axios';
import './JobPostings.css';

class JobPostings extends React.Component {
    constructor() {
        super();
        this.state = {
            // Store all of the jobs
            jobs: []
        }
    }

    async componentDidMount() {
        // Get all the jobs
        await axios
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
                {this.state.jobs.map((jobs, index) => {
                    return (
                        <div key={jobs.id} className="jobs__listing">
                            <div className="jobs__listing_left">
                                <h2>{jobs.title}</h2>
                                <h3>{jobs.company}</h3>
                                <p>Amount of applicants: {jobs.applicant_count}</p>
                            </div>
                            <div className="jobs__listing_right">
                                <p>{jobs.job_type}</p>
                                <p>{jobs.location}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default JobPostings;