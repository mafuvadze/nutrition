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
                    <h3 style={{color:'white'}}>{smallTitle}</h3>
                    <h1 style={{fontFamily: "Arial Black", fontSize: "7em"}}>{largeTitle}</h1>
                    {buttonName != "" ? <Button>{buttonName}</Button> : null}
                </Container>
            </Jumbotron>
        </div>
    );
  }
}
