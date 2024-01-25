import React from 'react';
import { useParams } from 'react-router-dom';

const Parameter = (props) => {
    const {wordOrNumber, color, backgroundColor} = useParams()

    return (
        <div>
            {
                isNaN(wordOrNumber)?
                <h1 style={
                    color?
                    {color: color, backgroundColor: backgroundColor}:
                    null
                }>
                    This is a word: {wordOrNumber}
                </h1>:
                <h1>This is a number: {wordOrNumber}</h1>
            }
        </div>
    );
}

export default Parameter;
