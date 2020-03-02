import React from 'react';
import classes from './Person.css';

const person = (props) => {
    return(      
        <div className={classes.Person}>
            <h1>This is a Person</h1>
            <p>Person's name: {props.name}</p>
            <p>Person's age: {props.age}</p>
            <p>Like: {props.children}</p>
            <input type="text" onChange={props.onchange} value={props.name}></input>
            <button onClick={props.onclick}>Delete</button>
        </div>
    );
}

export default person;