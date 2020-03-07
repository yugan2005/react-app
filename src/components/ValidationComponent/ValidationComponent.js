import React from 'react';

const validationComponent = (props) => {
    const length = 5;
    let outputText = "Text long enough";
    if (props.textInput.length < length) {
        outputText = "Text too short";
    }
    return (
        <div>
            <p>{outputText}</p>
        </div>
    )
}

export default validationComponent;