import React from 'react';
import JobService from '../../services/JobService';
import './Apply.css';
import { Link, Redirect } from 'react-router-dom';
import img from '../../assets/icon.svg';

class Apply extends React.Component {
    constructor() {
        super()
        this.state = {
            // Hold input information in state
            motivation: '',
            coverLetter: '',
            status: null
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

        if (result.status === 200) {
            let status = result.status
            this.setState({ status })
        }

    };

    render() {
        let { motivation, coverLetter, status } = this.state
        return (
            <div className="application__containter">
                <form className="application__form" onSubmit={this.submitForm}>
                    <img src={img} alt="Divecity Login" />
                    {status === 200 ?
                        <h1 id="success">You have successfully applied for this job.</h1> :
                        <div>
                            <h3>Thank you for your interest in this job</h3>
                            <h3>please fill out the information below.</h3>
                        </div>}
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
            </div >
        )
    }
}

export default Apply;