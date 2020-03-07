import React from 'react';
import Person from './Person/Person';

/**
 * 
 * @param {props} props - in props, we need
 * 1.people - list of person
 * 2. onclick (handler)
 * 3. onchange (handler)
 * 4. showPeople (boolean)
 */
const people = (props) => {
    if (props.showPeople) {
        return (
            props.people.map((person, idx) => (
                <Person person={person}
                    key={person.id}
                    onclick={(event) => props.onclick(event, idx)}
                    onchange={(event) => props.onchange(event, idx)}
                >{person.hobby}</Person>
        
        )))         
    }
    return null;
}
export default people;