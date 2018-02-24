import React, {Component} from 'react';
import '../styles/Main.css';

export default class Systems extends Component {
    constructor(){
        super()

        this.state = {

        }
    }

    componentDidMount(){
        document.title = 'Systems Page'
    }

    render(){
        return (
            <div className="Systems">
                <h1 style={{textAlign: 'center', fontSize: "50px", marginTop: "20%"}}>Reserved for Diagrams</h1>
            </div>
        )
    }
}