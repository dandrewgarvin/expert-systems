import React, {Component} from 'react';
import '../styles/Main.css';

import {Link} from 'react-router-dom'

export default class Header extends Component {
    constructor(){
        super()

        this.state = {

        }
    }

    render(){
        return (
            <div className="Header">
                <Link to="/"><div className="logo_container">
                    <img src={this.props.logo} className="logo" name="logo" alt=""/>
                    <label htmlFor="logo" className="logo_label">Expert Systems</label>
                </div></Link>
                <nav className="nav">
                    <ul>
                        <Link to="/systems"><li>View Systems</li></Link>
                        <Link to="/about"><li>FAQ's</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                        <Link to="/login"><li>Login</li></Link>
                    </ul>
                </nav>
            </div>
        )
    }
}