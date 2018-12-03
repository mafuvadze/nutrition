import React, { Component } from 'react';

import Question from './Question'
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
        if (topicSet.rank.indexOf(this.state.selectedFood) < topicSet.rank.indexOf(notChosen)) {
            this.setState({
                correct: this.state.selectedFood,
                answerChecked: true,
            });
        } else {
            this.setState({
                correct: notChosen,
                answerChecked: true,
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
                <div style={{ backgroundColor: '#0080ff' }}>
                    <Header size='huge' style={{ display: 'flex', justifyContent: 'center', margin: "36px", color: 'white' }}>
                        {title}
                    </Header>
                    {this.state.correct != null && <Header style={{ display: 'flex', justifyContent: 'center', margin: "36px", color: 'white'}} >{this.state.correct} is the answer</Header>}
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
                            selected={foods.foods[randVersus[1]].name === this.state.selectedFood}x
                            onClick={() => {
                                this.handleCardClick(foods.foods[randVersus[1]].name);
                            }}
                            dishName={foods.foods[randVersus[1]].name}
                            restaurant={foods.foods[randVersus[1]].restaurant}
                            ingredients={foods.foods[randVersus[1]].ingredients}
                            image={foods.foods[randVersus[1]].image}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
                        {this.state.answerChosen && <Button onClick={() => { this.handleCheckAnswer(topicSet)}} positive>Check Answer</Button>}
                        {this.state.done && <Button content='Done'><Link to='/home'>Done</Link></Button>}
                        {(!this.state.done && this.state.answerChecked) && <Button
                            content='Next'
                            icon='right arrow'
                            labelPosition='right'
                            onClick={() => {
                                const qnum = this.state.questionNum + 1;
                                if (qnum === 4) {
                                    this.setState({ done: true, questionNum: qnum, answerChosen: false, answerChecked: false, correct: null, selected: null, currentVersus: null,})
                                } else {
                                    this.setState({ questionNum: qnum, answerChosen: false, answerChecked: false, correct: null, currentVersus: null, selected: null });
                                }
                            }} />}
                    </div>
                </div>
            </div>
        );
    }
}

export default Ranker;