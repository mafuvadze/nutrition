import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Navbar.js';
import Home from './components/Home.js';
import Info from './components/Info.js';
import Quiz from './components/Quiz.js';

class App extends Component {
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
