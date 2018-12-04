import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Container from 'react-bootstrap/lib/Container';
import Button from 'react-bootstrap/lib/Button';

export default class Header extends Component {
  render() {
    let {backgroundColor, smallTitle, largeTitle, buttonName} = this.props
    return (
        <div>
            <Jumbotron fluid style={{backgroundColor: backgroundColor, marginBottom: "0"}}>
                <Container>
                    <h1 style={{color:'white'}}>{smallTitle}</h1>
                    <h1 style={{fontFamily: "Arial Black", fontSize: "7em"}}>{largeTitle}</h1>
                    {buttonName !== "" ? <Button style={{fontSize: '1.4em', width: '50%', height: '50px'}}>{buttonName}</Button> : null}
                </Container>
            </Jumbotron>
        </div>
    );
  }
}
