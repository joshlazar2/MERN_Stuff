import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OneAlbum = (props) => {

    const navigate = useNavigate();

    const [album, setAlbum] = useState({})

    const { id } = useParams()

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/findAlbum/${id}`)
            .then((res) => {
                console.log(res);
                setAlbum(res.data) // in our controller we response with res.json(oneAlbum). So our res.data is an object itself. Prev we did res.json({Album: oneAlbum}), so we would have done res.data.Album
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteHandler = (id) => {
        axios
            .delete(`http://localhost:8000/api/deleteAlbum/${id}`)
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <h2>Album Info</h2>
            <div className='border border-dark'>
                <p>Album Name: {album.albumName}</p>
                <p>Artist: {album.artist}</p>
                <p>Release Year: {album.releaseYear}</p>
                <p>Genre: {album.genre}</p>
                {
                    album.explicit ?
                        <p>Explicit: Yes</p> :
                        <p>Explicit: No</p>
                }
                <button className='btn btn-danger' onClick={() => deleteHandler(album._id)}>Delete</button>
            </div>
        </div>
    );
}

export default OneAlbum;
