import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Navbar.js';
import Home from './components/Home.js';
import Info from './components/Info.js';
import Quiz from './components/Quiz.js';
import Ranker from './components/Ranker'

import foods from './resources/food'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: "",
    }
  }
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Home/>
        <Info/>
        <Quiz/>
      </div>
    );
  }
}

export default App;
