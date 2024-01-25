import React from 'react';

const PersonCard = (props) => {
    let {firstName, lastName, age, hairColor} = props
    return (
        <div>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    );
}

export default PersonCard;
