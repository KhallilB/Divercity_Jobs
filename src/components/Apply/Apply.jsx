import React from 'react';
import JobService from '../../services/JobService';
import './Apply.css';

class Apply extends React.Component {
    constructor() {
        super()
        this.state = {
            motivation: '',
            coverLetter: ''
        }
        this.JobService = new JobService();
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitForm = async event => {
        event.preventDefault();

        const { motivation, coverLetter } = this.state;

        let result = await this.JobService.applyToJob(motivation, coverLetter)
        console.log(result)
    };

    render() {
        let { motivation, coverLetter } = this.state
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <input
                        type="motivation"
                        placeholder="Motivation for applying"
                        name="motivation"
                        value={motivation}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Cover Letter"
                        name="coverLetter"
                        value={coverLetter}
                        onChange={this.handleChange}
                    />
                    <button>Apply</button>
                </form>
            </div>
        )
    }
}

export default Apply;