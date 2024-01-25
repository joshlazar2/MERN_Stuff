import React from 'react';
import './Shows.css'

const Shows = (props) => {
    // console.log(props.title);
    let {title, releaseYear} = props
    return (
        <div>
            <h2>Title: {title}</h2>
            <h3>Release Year: {releaseYear}</h3>
            <button className="custom-btn">Add</button>
        </div>
    );
}

export default Shows;
