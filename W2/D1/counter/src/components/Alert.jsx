import React from 'react';

const Alert = (props) => {
    return (
        <div>
            <h1>Synthetic Events</h1>
            <button onClick={ ()=> alert('you clicked me')}>Click Me!</button> 
            {/* Instead of onClick={ ()=> alert('you clicked me')}, you can do onClick={alertButton} */}
        </div>
    );
}



export default Alert;
