import React from 'react';
import classes from './Cockpit.css';

/**
 * 
 * @param {props} props -> needs:
 * 1. people list
 * 2. showPeople boolean
 * 3. onclick handler
 */
const cockpit = (props) => {

    let personClasses = [];
    if (props.people.length <= 2) {
        personClasses.push(classes.red);
    }
    if (props.people.length <= 1) {
        personClasses.push(classes.bold);
    }

    let buttonClasses = null;
    if (props.showPeople) {
        buttonClasses = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={personClasses.join(' ')}>It is really working!</p>
            <hr></hr>
            <button className={buttonClasses}
                onClick={props.onclick}>Toggle showing People</button>
        </div>
    );

}

export default cockpit;