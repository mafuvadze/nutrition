import React, { Component } from 'react';
import Container from 'react-bootstrap/lib/Container';
import Button from 'react-bootstrap/lib/Button';
import Header from './Header.js'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


export default class Quiz extends Component {
  render() {
    return (
        <div>
            <Header
            backgroundColor="gold"
            smallTitle="TAKE THE"
            largeTitle="QUIZ"
            buttonName=""/>
            <Container style={{marginTop: '20px'}}><h3>CHOOSE A CATEGORY</h3></Container>
            <Container>
                <Button style={{ height: '9em', width: '9em', margin: '10px' }} variant="outline-warning" ><Link to='/quiz/balance'>Balanced Quiz</Link></Button>
                <Button style={{ height: '9em', width: '9em', margin: '10px' }} variant="outline-warning" ><Link to='/quiz/moderate'>Moderate Quiz</Link></Button>
                <Button style={{ height: '9em', width: '9em', margin: '10px' }} variant="outline-warning" ><Link to='/quiz/variety'>Varied Quiz</Link></Button>
                <Button style={{ height: '9em', width: '9em', margin: '10px' }} variant="outline-warning" ><Link to='/quiz/adequate'>Adequacy Quiz</Link></Button>
            </Container>
        </div>
    );
  }
}
