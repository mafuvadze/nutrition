import React, { Component } from 'react';

import { Card, Image, Icon, Label } from 'semantic-ui-react'
import foods from '../resources/food'

export default class Question extends Component {
    getIngredientsUi = (foods) => {
        return foods.map((food) => <li key={food}>{food}</li>);
    }

    render() {
        return (
            <Card onClick={this.props.onClick} style={{textAlign: "left", margin: '0'}}>
                <Image src={this.props.image} style={{height: "200px"}}/>
                <Card.Content>
                    <Card.Header>{this.props.dishName}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{this.props.restaurant}</span>
                    </Card.Meta>
                    <Card.Description>
                       <div>
                            {this.getIngredientsUi(this.props.ingredients)}
                       </div>
                    </Card.Description>
                </Card.Content>
                {this.props.selected && <Label color='blue'>Selected</Label>}
            </Card>
        );
    }
}
