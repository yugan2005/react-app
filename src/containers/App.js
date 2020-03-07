import React, { Component } from 'react';
import classes from './App.css';
import Car from '../components/Car/Car';
import ValidationComponent from '../components/ValidationComponent/ValidationComponent';
import CharComponents from '../components/CharComponents/CharComponents';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {
    people: [
      { id: "fakeId1", name: "neo", age: 10, hobby: "Tennis" },
      { id: "fakeId2", name: "jed", age: 4, hobby: "Movie" },
      { id: "fakeId3", name: "tiffany", age: 13, hobby: "Eat" }
    ],
    cars: [
      { maker: "Nisan", year: 1800 },
      { maker: "Tesla", year: 2020 }
    ],
    showPeople: false,
    textInput: ""
  }

  switchNameHandler = (event, idx) => {
    const person = { ...this.state.people[idx] };
    person.name = event.target.value;
    const people = [...this.state.people];
    people.splice(idx, 1, person);
    this.setState({ people: people })
  }

  makerChangeHandler = (event) => {
    this.setState({
      cars: [
        { maker: event.target.value, year: 1800 },
        { maker: "Tesla", year: 2020 }
      ]
    })
  }

  deletePersonHandler = (idx) => {
    const people = [...this.state.people];
    people.splice(idx, 1);
    this.setState({ people: people });
  }

  toggleShowMorePeopleHandler = () => {
    const currShowPeople = this.state.showPeople;
    this.setState({
      showPeople: !currShowPeople
    })
  }

  textInputHandler = (event) => this.setState(
    {
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

  render = () => (
    <div className={classes.App}>

      <Cockpit people={this.state.people}
        showPeople={this.state.showPeople}
        onclick={this.toggleShowMorePeopleHandler}></Cockpit>

      <People showPeople={this.state.showPeople}
        people={this.state.people}
        onchange={this.switchNameHandler}
        onclick={this.deletePersonHandler}></People>

      <hr></hr>

      <Car maker={this.state.cars[0].maker}
        year={this.state.cars[0].year} onchange={this.makerChangeHandler}></Car>

      <hr></hr>

      <input type="text" onChange={this.textInputHandler}
        value={this.state.textInput}></input>
      <p>input length: {this.state.textInput.length}</p>

      <ValidationComponent textInput={this.state.textInput}></ValidationComponent>

      <CharComponents
        textInput={this.state.textInput}
        onclick={this.charOnClickHandler}></CharComponents>
        
    </div>
  )
}

export default App;