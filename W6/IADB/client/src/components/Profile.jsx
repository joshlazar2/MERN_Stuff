import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {

    const [albumList, setAlbumList] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/allAlbumsByLoggedInUser', {withCredentials:true})
            .then((res) => {
                console.log(res);
                setAlbumList(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div>
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
                    </div>
                ))
            }
        </div>
    );
}

export default Profile;
