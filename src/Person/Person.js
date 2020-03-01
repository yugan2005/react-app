import React from 'react';
import Styled from 'styled-components';

const StyledDiv = Styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 1px 2px 3px gray;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px
    }
`;


const person = (props) => {
    return(      
        <StyledDiv>
            <h1>This is a Person</h1>
            <p>Person's name: {props.name}</p>
            <p>Person's age: {props.age}</p>
            <p>Like: {props.children}</p>
            <input type="text" onChange={props.onchange} value={props.name}></input>
            <button onClick={props.onclick}>Delete</button>
        </StyledDiv>
    );
}

export default person;