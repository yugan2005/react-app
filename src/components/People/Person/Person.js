import React from 'react';
import classes from './Person.css';

/**
 * Person component
 * @param {props} props - in props, we need:
 * 1. person object
 * 2. onchange (handler)
 * 3. onclick (handler)
 */

const person = (props) => {
    return(      
        <div className={classes.Person}>
            <h1>This is a Person</h1>
            <p>Person's name: {props.person.name}</p>
            <p>Person's age: {props.person.age}</p>
            <p>Like: {props.children}</p>
            <input type="text" onChange={props.onchange} value={props.person.name}></input>
            <button onClick={props.onclick}>Delete</button>
        </div>
    );
}

export default person;