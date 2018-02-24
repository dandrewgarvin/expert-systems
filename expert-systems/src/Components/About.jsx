import React, {Component} from 'react';
import '../styles/Main.css';

export default class About extends Component {
    constructor(){
        super()

        this.state = {
            expanded: false,
            expandedCat: undefined,
            categories: ['Business', 'Personal', 'Community', 'Miscellaneous', 'Troubleshooting'],
            colors: [ {background: 'lightblue'},{background: '#CBF5E0'},{background: '#FFFFAA'},{background: '#F8D696'},{background: '#F7A5A5'} ],
            questions: {
                business: [
                    {
                        question: 'What is an Expert System?', 
                        answer: `By it's literal definition, an expert system is a computer program that acts like an artificial intellegence by making emulating educated, human-like decisions based on if-then principles. We have slightly modified this principle by creating an environment that allows you, the user, to make decisions based on principles and practices others have found to be highly effective and efficient in any given industry`
                    },
                    {
                        question: 'Can I make my own Expert System?',
                        answer: `Absolutely! ESS is an open-source platform that allows professionals in any field create expert systems based on experience, and share those systems with everyone!`
                    },
                    {
                        question: 'What if I want to implement ESS into my business?',
                        answer: `We would love to discuss with you potential opportunities to work together. Please contact us by clicking the 'Contact' tab at the top of this page, and we'll get back to you as soon as possible.`
                    },
                    {
                        question: 'Does this cost any money?',
                        answer: `Not a cent! We believe that knowledge is power. If everyone had access to the worlds most effective and effiecient ways of doing things, the world would be a much better place. For this reason, we strive to make sure Expert Systems are openly available to everyone!`
                    }
                ], 
                personal: [
                    {
                        question: 'pers', 
                        answer: 'pers answ'
                    }
                ], 
                community: [
                    {
                        question: 'comm', 
                        answer: 'comm answ'
                    }
                ], 
                miscellaneous: [
                    {
                        question: 'misc', 
                        answer: 'misc answ'
                    }
                ], 
                troubleshooting: [
                    {
                        question: 'trou', 
                        answer: 'trou answ'
                    }
                ]
            }
        }
        this.handleExpand = this.handleExpand.bind(this);
    }

    componentDidMount(){
        document.title = 'About Page | FAQ'
    }

    handleExpand(e, i){
        let exp = this.state.expanded
        let col = this.state.colors[i]
        this.setState({expanded: !exp, expandedCat: {name: e, num: col}})
    }

    render(){

        // This is an automatic color scheme generator... some how...
        const displayCategories = this.state.categories.map((e,i,a)=>{
            // let color1 = ~~(Math.random() * 255)
            // let color2 = ~~(Math.random() * 255)
            // let color3 = ~~(Math.random() * 255)
            return (
                <div key={i} onClick={_=>this.handleExpand(e, i)} className="category" style={this.state.colors[i]}>{e}</div>
                // <div key={i} onClick={_=>this.handleExpand(e, i)} className="category" style={{background: `rgba(${color1}, ${color2}, ${color3}, 1.0)`}} >{e}</div>
            )
        })

        const displayExpanded = () => {
            let catName = this.state.expandedCat.name.toLowerCase();
            let questions = this.state.questions[catName]
            console.log(questions)
            let displayQuestions = questions.map((e,i,a)=>{
                return (
                    <div className="question">
                        <h3 className="question_name">{e.question}</h3>
                        <p className="question_answer">{e.answer}</p>
                    </div>
                )
            })

            return (
                <div className="expanded">
                    <div onClick={_=>this.handleExpand()} className="category" style={this.state.expandedCat.num}>{this.state.expandedCat.name}</div>
                    <div className="questions">
                        {displayQuestions}
                    </div>
                </div>
            )
        }

        return (
            <div className="About">
                <div className="categories">
                    {/* Change this to have each category have the expanded category beneath it (always displaying) 
                    that will have a display: none; property on it. That way I can transform/transition on it 
                    for an animation to open and close, and it displays the other category heads beneath it 
                    -- Change state to have a toggle on/off for each category -- make it DRY */}
                    {this.state.expanded ? displayExpanded() : displayCategories}
                </div>
            </div>
        )
    }
}