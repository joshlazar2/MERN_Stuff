import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Display = (props) => {

    const [albumList, setAlbumList] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/allAlbums')
            .then((res) => {
                console.log(res);
                setAlbumList(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    albumList.sort((a, b) => (a.artist > b.artist) ? 1 : -1)

    return (
        <div className='d-flex justify-content-between'>
            {
                albumList.map((album) => (
                    <div key={album._id} className='border border-dark'>
                        <p>Album Name: {album.albumName}</p>
                        <p>Artist: {album.artist}</p>
                        <p>Release Year: {album.releaseYear}</p>
                        <p>Genre: {album.genre}</p>
                        {
                            album.explicit ?
                                <p>Explicit: Yes</p> :
                                <p>Explicit: No</p>
                        }
                        <Link className='btn btn-secondary' to={`/oneAlbum/${album._id}`}>Details</Link>
                        <Link className='btn btn-primary' to={`/editAlbum/${album._id}`}>Edit</Link>
                    </div>
                ))
            }
        </div>
    );
}

export default Display;
