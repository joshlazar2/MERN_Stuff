import React from 'react';

const DisplayShows = (props) => {
    let {showList, setShowList} = props
    return (
        <div>
            {
                showList.map( (show, idx) => (
                    <div key={idx}>
                        <h2>Title: {show.title}</h2>
                        <h2>Release Year: {show.releaseYear}</h2>
                        <h2>Genre: {show.genre}</h2>
                    </div>
                    
                ))
            }
        </div>
    );
}

export default DisplayShows;
