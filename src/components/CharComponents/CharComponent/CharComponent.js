import React from 'react';
import classes from './CharComponent.css';

const charComponent = (props) => (
    <div className={classes.CharComponent} 
    onClick={props.onclick}>
        {props.character}
    </div>
)

export default charComponent;