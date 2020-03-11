import React from 'react';
import JobService from '../../services/JobService';
import './Apply.css';
import { Link } from 'react-router-dom';
import img from '../../assets/icon.svg';

class Apply extends React.Component {
    constructor() {
        super()
        this.state = {
            // Hold input information in state
            motivation: '',
            coverLetter: ''
        }
        // User service to apply to job
        this.JobService = new JobService();
    }

    // Handles event changes made in input fields and maps
    // them to state
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    // Sends request to backend with data from state
    submitForm = async event => {
        event.preventDefault();

        const { motivation, coverLetter } = this.state;

        let result = await this.JobService.applyToJob(motivation, coverLetter)
        console.log(result)
    };

    render() {
        let { motivation, coverLetter } = this.state
        return (
            <div className="application__containter">
                <form className="application__form" onSubmit={this.submitForm}>
                    <img src={img} alt="Divecity Login" />
                    <h3>Thank you for your interest in this job</h3>
                    <h3>please fill out the information below.</h3>
                    <textarea
                        className="application__form_input"
                        type="textarea"
                        placeholder="What is your motivation for applying? We'd love to hear about it!"
                        name="motivation"
                        value={motivation}
                        onChange={this.handleChange}
                    />
                    <textarea
                        className="application__form_input"
                        placeholder="Cover Letter"
                        name="coverLetter"
                        value={coverLetter}
                        onChange={this.handleChange}
                    />
                    <div className="applicatiion__form_button_goup">
                        <button className="application__form_button">Apply</button>
                        <Link to={'/jobs'}><button className="application__form_button">Go Back</button></Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default Apply;