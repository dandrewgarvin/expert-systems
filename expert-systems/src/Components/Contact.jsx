import React, {Component} from 'react';
import '../styles/Main.css';

export default class Contact extends Component {
    constructor(){
        super()

        this.state = {

        }
    }

    componentDidMount(){
        document.title = 'Contact Page'
    }

    render(){
        return(
            <div className="Contact">
                <h1>Contact</h1>
            </div>
        )
    }
}