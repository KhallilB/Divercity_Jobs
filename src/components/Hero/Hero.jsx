import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

import backgroundImage from '../../assets/diversity-background.png';

class Hero extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="hero__container">
                <div className="hero__background">
                    <img src={backgroundImage} alt="#" />
                    <div className="hero__transparent" />

                    <div className="hero__welcome_text">
                        <h1>Welcome to Divercity Jobs</h1>
                        <h3>The World’s Largest Minority Professional Network</h3>

                        <Link to="/jobs"><button>See Jobs</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero;