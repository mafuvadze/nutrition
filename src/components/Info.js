import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Image from 'react-bootstrap/lib/Image';
import Container from 'react-bootstrap/lib/Container';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
import Button from 'react-bootstrap/lib/Button';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import Header from './Header.js';
import burger from './../images/burger.jpg';

export default class Info extends Component {

    

  render() {
      const balanced = <p style={{paddingTop: '10px'}}>A balanced diet contains the combinations of foods that provide the proper proportions of nutrients. As you will learn in this course, the body needs many types of foods in varying amounts to maintain health. For example, fruits and vegetables are excellent sources of fiber, vitamin C, potassium, and magnesium. In contrast, meats are not good sources of fiber and these nutrients. However, meats are excellent sources of protein, iron, zinc, and copper. By eating the proper balance of all healthful foods, including fruits, vegetables, and meats or meat substitutes, we can be confident that we reconsuming the balanced nutrition we need to maintain health.</p>
      const adequate = <p style={{paddingTop: '10px'}}>An adequate diet provides enough of the energy, nutrients, and fiber to maintain a person s health. A diet may be inadequate in only one area, or many areas. For example, many people in the United States do not eat enough vegetables and therefore are not consuming enough of the fiber and micronutrients vegetables provide. However, their intake of protein, fat, and carbohydrate may be adequate. In fact, some people who eat too few vegetables are overweight or obese, which means that they are eat- ing a diet that, although inadequate in one area, exceeds their energy needs. On the other hand, a generalized state of undernutrition can occur if an individual s diet contains an inadequate level of several nutrients for a long period of time. <br /> A diet that is adequate for one person may not be adequate for another. For example, the energy needs of a small woman who is lightly active are approximately 1,700 to 2,000 kilocalories (kcal) each day, whereas a highly active male athlete may require more than 4,000 kcal each day to support his body s demands. These two individuals differ greatly in their activity level and in their quantity of body fat and muscle mass, which means they require very different levels of fat, carbohydrate, protein, and other nutrients to support their daily needs.</p>
      const varied = <p style={{paddingTop: '10px'}}>Variety refers to eating many different foods from the different food groups on a regular basis. With thousands of healthful foods to choose from, trying new foods is a fun and easy way to vary your diet. Eat a new vegetable each week or substitute one food for another, such as raw spinach on your turkey sandwich in place of iceberg lettuce. Selecting a variety of foods increases the likelihood that you will consume the multitude of nutrients your body needs. As an added benefit, eating a varied diet prevents boredom and helps you avoid the potential of getting into a food rut. Later in this chapter, well provide suggestions for eating a varied diet.</p>
      const moderate = <p style={{paddingTop: '10px'}}>Moderation is one of the keys to a healthful diet. Moderation refers to eating any foods in moderate amounts not too much and not too little. If we eat too much or too little of certain foods, we can not reach our health goals. For example, some people drink as much as 60 fluid ounces (three 20-oz bottles) of soft drinks on some days. Drinking this much contributes an extra 765 kcal of energy to a person s diet. In order to allow for these extra kcal and avoid weight gain, most people would need to reduce their food intake signifi- cantly. This could mean eliminating many health- ful food choices. In contrast, people who drink mostly water or other beverages that contain little or no energy can consume more nourishing foods that will support their wellness.</p>
      const citation = (
        <p> “Chapter 2 Designing a Healthful Diet.” <i>Nutrition: An Applied Approach</i>, by Janice Thompson and Melinda Manore, 3rd ed., Pearson/Benjamin Cummings, 2012, pp. 40–41. 
        </p>
      );
    return (
        <div>
            <Header
            backgroundColor="mediumspringgreen"
            smallTitle="LEARN ABOUT A"
            largeTitle="HEALTHFUL DIET"
            buttonName=""/>
            <Jumbotron style={{display: 'flex'}}>
                <Container>
                <Tabs style={{justifyContent: 'center', marginTop: '10px'}} defaultActiveKey="balanced" id="uncontrolled-tab-example">
                        <Tab eventKey="balanced" title="BALANCED">
                            {balanced}
                        </Tab>
                        <Tab eventKey="moderate" title="MODERATE">
                            {moderate}
                        </Tab>
                        <Tab eventKey="varied" title="VARIED">
                            {varied}
                        </Tab>
                        <Tab eventKey="adequate" title="ADEQUATE">
                            {adequate}
                        </Tab>
                    </Tabs>
                </Container>
                <Container>
                    <Image style={{width: "100%", height: 'auto'}}src={burger} thumbnail />
                    {citation}
                </Container>
            </Jumbotron>
        </div>
    );
  }
}
