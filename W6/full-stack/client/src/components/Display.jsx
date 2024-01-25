import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const Display = (props) => {

    let { showList, setShowList } = props;

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/allShows')
            .then((response) => {
                console.log(response);
                setShowList(response.data) // in our controller we respond with an array directly, so data is the array of allShows (objects). Before we responded with { shows: allShows} an object with the key shows and the value of an array so we would do response.data.shows. The data key of our response object represents our res.json from our controller function that was called when we went to the route above (/api/allshows)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteHandler = (id) => {
        axios
            .delete(`http://localhost:8000/api/deleteShow/${id}`)
                .then((res) => {
                    console.log(res);
                    const updatedShowList = showList.filter((show) => show._id !== id)
                    setShowList(updatedShowList)
                })
                .catch((err) => {
                    console.log(err);
                })
    }

    return (
        <div className='d-flex justify-content-between'>
            {
                showList.map((show) => (
                    <div key={show._id} className='border border-dark'>
                        <p>Title: {show.title}</p>
                        <p>Release Year: {show.releaseYear}</p>
                        <p>Network: {show.network}</p>
                        <p>Creator: {show.creator}</p>
                        <p>Genre: {show.genre}</p>
                        <Link className='btn btn-secondary' to={`/viewShow/${show._id}`}>View</Link>
                        <Link className='btn btn-primary' to={`/editShow/${show._id}`}>Edit</Link>
                        <button className='btn btn-danger' onClick={() => deleteHandler(show._id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
}

export default Display;
