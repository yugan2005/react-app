import React, { Component } from 'react';
import styled from 'styled-components'
import './App.css';
import Person from './Person/Person';
import Car from './Car/Car';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    people: [
      {id: "fakeId1", name: "neo", age: 10, hobby: "Tennis"},
      {id: "fakeId2", name: "jed", age: 4, hobby: "Movie"},
      {id: "fakeId3", name: "tiffany", age: 13, hobby: "Eat"}
    ],
    cars: [
      {maker: "Nisan", year: 1800},
      {maker: "Tesla", year:2020}
    ],
    showPeople: false,
    textInputLength: 0,
    textInput: ""
  }

  switchNameHandler = (event, idx) => {
    const person = {...this.state.people[idx]};
    person.name = event.target.value;
    const people = [...this.state.people];
    people.splice(idx, 1, person);
    this.setState({people: people})
  }

  makerChangeHandler = (event) => {
    this.setState({
      cars: [
        {maker: event.target.value, year: 1800},
        {maker: "Tesla", year:2020}
      ]
    })
  }

  deletePersonHandler = (idx) => {
    const people = [...this.state.people];
    people.splice(idx, 1);
    this.setState({people: people});
  }

  toggleShowMorePeopleHandler = () => {
    const currShowPeople = this.state.showPeople;
    this.setState({
      showPeople: !currShowPeople
    })
  }

  textInputHandler = (event) => this.setState(
    {
      textInputLength: event.target.value.length,
      textInput: event.target.value
    }
  )

  charOnClickHandler = (idx) => {
    const textInputArray = [...this.state.textInput]
    textInputArray.splice(idx, 1)
    this.setState(
      {
        textInput: textInputArray.join(""),
        textInputLength: textInputArray.length
    }
    )
  }

  render = () => {

    const StyledButton = styled.button`
      background-color: ${this.state.showPeople ? 'red' : 'green'};
      color: ${this.state.showPeople ? 'black' : 'white'};
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;

      &:hover {
        background-color: ${this.state.showPeople ? 'salmon' : 'lightgreen'};
        color: ${this.state.showPeople ? 'grey' : 'yellow'}
      }
    }`;

    let peopleDiv = null

    if (this.state.showPeople) {
      peopleDiv = (
        <div>
          {this.state.people.map((person, idx) => (
            <Person name={person.name}
              age={person.age}
              key={person.id}
              onchange={(event) => this.switchNameHandler(event, idx)}
              onclick={this.deletePersonHandler.bind(this, idx)}>{person.hobby}</Person>
          ))}
        </div>
      );
    }

    let charComponents = null
    if (this.state.textInputLength > 0) {
      charComponents = (
        <div>
          {[...this.state.textInput].map((char, idx) => (
            <CharComponent character={char} 
              key={char + idx}
              onclick={this.charOnClickHandler.bind(this, idx)}></CharComponent>))
          }
        </div>
      )
    }

    const pClasses = [];
    if (this.state.people.length <= 2) {
      pClasses.push('red');
    }
    if (this.state.people.length <= 1) {
      pClasses.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={pClasses.join(' ')}>It is really working!</p>
        <hr></hr>
        <StyledButton
          onClick={this.toggleShowMorePeopleHandler}>Toggle showing People</StyledButton>
        {peopleDiv}
        <hr></hr>
        <Car maker={this.state.cars[0].maker} 
          year={this.state.cars[0].year} onchange={this.makerChangeHandler}></Car>
        <hr></hr>
        <input type="text" onChange={this.textInputHandler} 
          value={this.state.textInput}></input>
        <p>input length: {this.state.textInputLength}</p>
        <ValidationComponent textLength={this.state.textInputLength}></ValidationComponent>
        {charComponents}
      </div>
    )}
}

export default App;