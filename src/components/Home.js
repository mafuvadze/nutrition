import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Container from 'react-bootstrap/lib/Container';
import Button from 'react-bootstrap/lib/Button';
import fruit from '.././images/vegan-pizza.jpg'
import Header from './Header.js'
import Image from 'react-bootstrap/lib/Image';

export default class Home extends Component {
  render() {
    return (
        <div>
            <Header
            backgroundColor="deepskyblue"
            smallTitle="ARE YOU"
            largeTitle="EATING HEALTHY?"
            buttonName="TAKE THE QUIZ"/>
            <Jumbotron style={{display: 'flex', marginBottom: '0', alignItems: 'center'}}>
                <Container>
                    <Image src={fruit} alt="fruit" style={{width:'100%', overflow: 'hidden'}} thumbnail/>
                    
                </Container>
                <Container>
                    <h3>PARTS OF A HEALTHFUL DIET</h3>
                    <h4>4 Simple Steps</h4>
                    <p>Ever wonder what it takes to follow a healthy diet? While there are numerous aspects to maintaining one, incorporating a diet that is balanced, moderate, varied, and adequate is a good start!</p>
                    <Button>LEARN MORE</Button>
                </Container>
            </Jumbotron>
            <Jumbotron style={{marginBottom: '0'}}>
                <Container style={{display: 'flex'}}>
                    <Container>
                    <h4>STUDENTS</h4>
                    <p>Anngelyque Stevenson</p>
                    <p>Anesu Mafuvadze</p>
                    </Container>
                    <Container>
                    <h4>COURSE</h4>
                    <p>Nutrition</p>
                    <p>PHYSEDU 203</p>
                    </Container> 
                    <Container>
                    <h4>NUTRITION HELP</h4>
                    <p><a rel="noopener noreferrer" href="https://studentaffairs.duke.edu/studenthealth/nutrition/nutrition-resources-information" target="_blank">Nutrition Resources &amp; Information</a></p>
                    <p><a rel="noopener noreferrer" href="https://studentaffairs.duke.edu/studenthealth/nutrition-services" target="_blank">Nutrition Services</a></p>
                    </Container>  
                </Container>
            </Jumbotron>
        </div>
    );
  }
}
