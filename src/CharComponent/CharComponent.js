import React from 'react';
import './CharComponent.css';

const charComponent = (props) => (
    <div className="CharComponent" onClick={props.onclick}>
        {props.character}
    </div>
)

export default charComponent;