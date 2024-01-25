import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateAlbum = (props) => {

    const navigate = useNavigate();

    const [album, setAlbum] = useState({
        albumName: '',
        artist: '',
        releaseYear: 1920,
        genre: 'Rock',
        explicit: false
    })

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        if (e.target.type === 'checkbox') {
            setAlbum({ ...album, explicit: !album.explicit })
        }
        else {
            setAlbum({ ...album, [e.target.name]: e.target.value })
        }
    } // Can also do if(e.target.name === 'explicit')

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/api/createAlbum', album, {withCredentials:true})
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div>
            <h2>Post Album</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Album Name:</label>
                    <input type="text" name="albumName" onChange={changeHandler} value={album.albumName} />
                    {
                        errors.albumName ?
                            <p className='text-danger'>{errors.albumName.message}</p> :
                            null
                    }
                </div>
                <div>
                    <label>Artist:</label>
                    <input type="text" name="artist" onChange={changeHandler} value={album.artist} />
                    {
                        errors.artist ?
                            <p className='text-danger'>{errors.artist.message}</p> :
                            null
                    }
                </div>
                <div>
                    <label>Release Year:</label>
                    <input type="number" name="releaseYear" onChange={changeHandler} value={album.releaseYear} />
                    {
                        errors.releaseYear ?
                            <p className='text-danger'>{errors.releaseYear.message}</p> :
                            null
                    }
                </div>
                <div>
                    <label>Genre:</label>
                    <select name="genre" onChange={changeHandler} value={album.genre} >
                        <option value="Rock">Rock</option>
                        <option value="Rap">Rap</option>
                        <option value="Dance">Dance</option>
                        <option value="House">House</option>
                        <option value="Country">Country</option>
                    </select>
                    {
                        errors.genre ?
                            <p className='text-danger'>{errors.genre.message}</p> :
                            null
                    }
                </div>
                <div>
                    <label>Explicit:</label>
                    <input type="checkbox" name="explicit" onChange={changeHandler} value={album.explicit} />
                    {
                        errors.explicit ?
                            <p className='text-danger'>{errors.explicit.message}</p> :
                            null
                    }
                </div>
                <button className='btn btn-primary'>Post Album</button>
            </form>
        </div>
    );
}

export default CreateAlbum;
