import React from 'react';
import CharComponent from './CharComponent/CharComponent'
/**
 * 
 * @param {props} props -> needs
 * 1. textInput (list of chars)
 * 2. onclick (handler)
 */
const charComponents = (props) => (
    [...props.textInput].map((char, idx) => (
        <CharComponent
            character={char}
            key={char + idx}
            onclick={() => props.onclick(idx)}></CharComponent>
    )))

export default charComponents;