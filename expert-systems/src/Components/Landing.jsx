import React, { Component } from 'react';
import '../styles/Main.css';
import image from '../styles/Assets/hero_image.jpg'

export default class Landing extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    componentDidMount() {
        document.title = 'Landing Page'
    }

    render() {
        return (
            <div className="Landing">
                <h1 className="hero_label">What is the Expert System Solutions<span className="copy">&trade;</span> Vision?</h1>
                <hr/>
                <main>
                    <div className="hero_left">
                        <img src={image} alt="happiness" className="hero_image"/>
                    </div>
                    <div className="hero_right">
                        <h2 className="hero_statement"><strong>Our mission is to assist in creating an:</strong></h2>
                        <p className="hero_statement">Improved Quality-of-Life for all by providing tools and means to stragically leverage decision-tree logic, natural abilities, correct-princles, best practices, and core values.</p>
                    </div>
                </main>
            </div>
        )
    }
}