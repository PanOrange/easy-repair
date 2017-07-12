import React, { Component } from 'react';
import Chance from 'chance';
const chance = new Chance();

class About extends Component {
    render() {
        return (
            <main className="main">
                <div className="wrapper">
                    <h1>Про нас</h1>
                    <p>{chance.paragraph()}</p>
                    <img src="/image/img-studio-5.jpg" alt=""/>
                    <p>{chance.paragraph()}</p>
                    <p>{chance.paragraph()}</p>
                    <p>{chance.paragraph()}</p>
                    <p>{chance.paragraph()}</p>
                </div>
            </main>
        );
    }
}

export default About;