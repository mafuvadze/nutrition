import React, { Component } from 'react';

import Question from './Question';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Container from 'react-bootstrap/lib/Container';
import { Header, Button, Label } from 'semantic-ui-react'
import NavBar from '../components/Navbar';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import foods from '../resources/food';

class Ranker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionNum: 0,
            selectedFood: "",
            done: false,
            answerChosen: false,
            answerChecked: false,
            currentVersus: null,
            correct: null,
            showResults: false,
            numCorrect: 0,
        }
    }

shuffle = (a) => {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

    handleCardClick = (food) => {
        this.setState({
            answerChosen: true,
            selectedFood: food
        });
    }

    handleCheckAnswer = (topicSet) => {
        const notChosen = this.state.selectedFood === this.state.currentVersus[0]
            ? this.state.currentVersus[1] : this.state.currentVersus[0];
        console.log(topicSet.rank.indexOf(this.state.selectedFood), topicSet.rank.indexOf(notChosen));    
        if (topicSet.rank.indexOf(this.state.selectedFood) < topicSet.rank.indexOf(notChosen)) {
            this.setState({
                correct: this.state.selectedFood,
                answerChecked: true,
                done: this.questionNum == 4,
                numCorrect: this.state.numCorrect + 1,
            });
        } else {
            this.setState({
                correct: notChosen,
                answerChecked: true,
                done: this.state.questionNum === 4,
            });
        }
    }

    render() {
        const {topic} = this.props;
        const topicSet = foods.questions[topic];
        const {title, rank, versus} = topicSet;
        let randVersus;
        if (this.state.currentVersus) {
            randVersus = this.state.currentVersus;
        } else {
            randVersus = this.shuffle(versus[this.state.questionNum]);
            this.setState({currentVersus: randVersus});
        }

        return (
            <div>
                <NavBar/>
                {this.state.showResults && <div>
                    <Jumbotron fluid style={{ backgroundColor: 'white', marginBottom: "0" }}>
                        <Container>
                            {<div style={{textAlign:'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}><h1 style={{fontSize: '3em'}}>{`You answered ${this.state.numCorrect} out of ${5} correct`}</h1><Button style={{width: '30%'}} content='Done'><Link to='/home'>Done</Link></Button></div>}
                        </Container>
                    </Jumbotron>
                </div>}
                
                {!this.state.showResults && <div style={{ backgroundColor: '#0080ff' }}>
                    <Header size='huge' style={{ display: 'flex', justifyContent: 'center', padding: "36px", color: 'white' }}>
                        {title}
                    </Header>
                    {/* {this.state.correct != null && <Header style={{ display: 'flex', justifyContent: 'center', margin: "36px", color: 'white'}} >{this.state.correct} is the answer</Header>} */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: "24px" }}>
                        <Question
                            correct={this.state.correct == null ? null : this.state.correct === foods.foods[randVersus[0]].name}
                            selected={foods.foods[randVersus[0]].name === this.state.selectedFood}
                            onClick={() => {
                                this.handleCardClick(foods.foods[randVersus[0]].name);
                            }}
                            dishName={foods.foods[randVersus[0]].name}
                            restaurant={foods.foods[randVersus[0]].restaurant}
                            ingredients={foods.foods[randVersus[0]].ingredients}
                            image={foods.foods[randVersus[0]].image}
                        />

                        <Header style={{ width: "100px", textAlign: 'center', color: 'white' }}>OR</Header>

                        <Question
                            correct={this.state.correct == null ? null : this.state.correct === foods.foods[randVersus[1]].name}
                            selected={foods.foods[randVersus[1]].name === this.state.selectedFood} x
                            onClick={() => {
                                this.handleCardClick(foods.foods[randVersus[1]].name);
                            }}
                            dishName={foods.foods[randVersus[1]].name}
                            restaurant={foods.foods[randVersus[1]].restaurant}
                            ingredients={foods.foods[randVersus[1]].ingredients}
                            image={foods.foods[randVersus[1]].image}
                        />
                    </div>
                    <div> {this.state.correct != null && <Header style={{ display: 'flex', justifyContent: 'center', margin: "36px", color: 'white' }} >{this.state.correct} is the answer</Header>}</div>
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
                        {this.state.answerChosen && <Button onClick={() => { this.handleCheckAnswer(topicSet) }} positive>Check Answer</Button>}
                        {this.state.done && <Button content='Done'><Link to='/home'>Done</Link></Button>}
                        {(!this.state.showResults && this.state.answerChecked) && <Button
                            content={this.state.questionNum === 4 ? 'Results' : 'Next'}
                            icon='right arrow'
                            labelPosition='right'
                            onClick={() => {
                                const qnum = this.state.questionNum + 1;
                                if (qnum === 4) {
                                    this.setState({questionNum: qnum, answerChosen: false, answerChecked: false, correct: null, selected: null, currentVersus: null, showResults: true})
                                } else {
                                    this.setState({ questionNum: qnum, answerChosen: false, answerChecked: false, correct: null, currentVersus: null, selected: null });
                                }
                            }} />}
                    </div>
                </div>}
            </div>
        );
    }
}

export default Ranker;