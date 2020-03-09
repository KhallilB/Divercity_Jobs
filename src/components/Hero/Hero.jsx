import React from 'react';
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
                </div>
            </div>
        )
    }
}

export default Hero;