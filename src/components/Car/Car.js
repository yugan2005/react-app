import React, { Component } from "react";

class Car extends Component {
    state = {
        cars: [
            {maker: "Toyota", year: 1978},
            {maker: "Honda", year: 2018}
        ],
        otherState: "someValue"
    }

    render() {
        return (
            <div>
                <h1>This is a Car</h1>
                <p>Car's maker from App.props: {this.props.maker}</p>
                <p>Car's year from App.props: {this.props.year}</p>
                <p>Car's maker from state: {this.state.cars[0].maker}</p>
                <p>Car's year from state: {this.state.cars[0].year}</p>
                <input type="text"
                    onChange={this.props.onchange}
                    value={this.props.maker}></input>
            </div>
        )
    }
}

export default Car