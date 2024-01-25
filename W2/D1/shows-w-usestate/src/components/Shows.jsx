import React from 'react';
import { useState } from 'react';

const Shows = (props) => {
    // console.log(props.title);
    let {title, releaseYear, sales} = props


    const [copiesSold, setCopiesSold] = useState(sales)

    const buy = () => {
        setCopiesSold(copiesSold+1)
    }

    return (
        <div>
            <h2>Title: {title}</h2>
            <h3>Release Year: {releaseYear}</h3>
            <h3>Sales: {copiesSold}</h3>

            <button onClick={buy}>Buy</button>
        </div>
    );
}

export default Shows;
