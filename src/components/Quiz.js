import React, { Component } from 'react';
import Container from 'react-bootstrap/lib/Container';
import Button from 'react-bootstrap/lib/Button';
import Header from './Header.js'

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
                <Button style={{height: '9em', width:'9em', margin: '10px'}} variant="outline-warning" >BALANCED</Button>
                <Button style={{height: '9em', width:'9em', margin: '10px'}} variant="outline-warning" >MODERATE</Button>
                <Button style={{height: '9em', width:'9em', margin: '10px'}} variant="outline-warning" >VARIED</Button>
                <Button style={{height: '9em', width:'9em', margin: '10px'}} variant="outline-warning" >ADEQUATE</Button>
            </Container>
        </div>
    );
  }
}
