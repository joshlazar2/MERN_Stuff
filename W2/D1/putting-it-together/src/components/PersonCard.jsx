import React from 'react';
import { useState } from 'react';

const PersonCard = (props) => {
    let {firstName, lastName, age, hairColor} = props

    const [personAge, setPersonAge] = useState(age)

    const birthday = () => {
        setPersonAge(personAge+1)
    }

    return (
        <div>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {personAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={birthday}>It's My Birthday</button>
        </div>
    );
}

export default PersonCard;
