import React from 'react';
import { useParams } from 'react-router-dom';

const Word = (props) => {
    const {color, number} = useParams()
    return (
        <div>
            <h2>Word Component</h2>
            <p style={{backgroundColor:color}}>You typed in {number}</p>
        </div>
    );
}

export default Word;
