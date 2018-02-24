import React, { Component } from 'react';
import './styles/Main.css';
import { Switch, Route } from 'react-router-dom';
import logo from './styles/Assets/flowchart_logo.gif'

import Header from './Components/Header';
import Landing from './Components/Landing';
import About from './Components/About';
import Contact from './Components/Contact';
import Systems from './Components/Systems';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header logo={logo}/>
        <main className="app_main">
          <Switch>
            <Route path="/about" render={ _=> <About logo={logo}></About> } />
            <Route path="/contact" component={Contact} />
            <Route path="/systems" component={Systems} />
            <Route path="/" exact component={Landing} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
