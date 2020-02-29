import React from 'react';
import Radium from 'radium'
import './Person.css';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return(      
        <div className="Person" style={style}>
            <h1>This is a Person</h1>
            <p>Person's name: {props.name}</p>
            <p>Person's age: {props.age}</p>
            <p>Like: {props.children}</p>
            <input type="text" onChange={props.onchange} value={props.name}></input>
            <button onClick={props.onclick}>Delete</button>
        </div>
    );
}

export default Radium(person);