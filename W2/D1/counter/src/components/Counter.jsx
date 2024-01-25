import React from 'react';
import { useState } from 'react';

const Counter = (props) => {
    
    const [count, setCount] = useState(0)

    const increaseCounter = () => {
        setCount(count + 1)
    }

    const decreaseCounter = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>Current Count: {count}</h1>
            <button onClick={increaseCounter}>Add</button>
            <button onClick={decreaseCounter}>Delete</button>
        </div>
    );
}

export default Counter;
