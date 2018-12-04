import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home" style={{fontSize: '1.5em'}}>Healthy Eating at Duke</Navbar.Brand>
            <div style={{display: 'flex', flexGrow: '1'}}></div>
            <Nav className="mr-auto">
            <Nav.Link href="#home"><Link to='/home'>Home</Link></Nav.Link>
          <Nav.Link href="#features"><Link to='/quiz/balance'>Balance Quiz</Link></Nav.Link>
          <Nav.Link href="#features"><Link to='/quiz/variety'>Variety Quiz</Link></Nav.Link>
          <Nav.Link href="#features"><Link to='/quiz/moderate'>Moderation Quiz</Link></Nav.Link>
          <Nav.Link href="#features"><Link to='/quiz/adequate'>Adequacy Quiz</Link></Nav.Link>
            </Nav>
        </Navbar>
    );
  }
}
