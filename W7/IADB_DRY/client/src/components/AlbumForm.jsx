import React, { useState } from 'react';
import axios from 'axios';

const AlbumForm = (props) => {

    const {submitHandler, album, setAlbum, errors, setErrors} = props;

    const changeHandler = (e) => {
        if (e.target.type === 'checkbox') {
            setAlbum({ ...album, explicit: !album.explicit })
        }
        else {
            setAlbum({ ...album, [e.target.name]: e.target.value })
        }
    }

    return (
        <div>
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

export default AlbumForm;
