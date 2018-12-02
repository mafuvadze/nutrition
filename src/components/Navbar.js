import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';

export default class NavBar extends Component {
  render() {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home" style={{fontSize: '1.5em'}}>Healthy Eating at Duke</Navbar.Brand>
            <div style={{display: 'flex', flexGrow: '1'}}></div>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Quiz</Nav.Link>
            <Nav.Link href="#pricing">Healthful Eating</Nav.Link>
            </Nav>
        </Navbar>
    );
  }
}
