import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AlbumForm from './AlbumForm';

const CreateAlbum = (props) => {

    const {album, setAlbum, errors, setErrors} = props;

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/api/createAlbum', album)
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors)
            })
    }

    return (
        <>
            <AlbumForm submitHandler={submitHandler} album={album} setAlbum={setAlbum} errors={errors} setErrors={setErrors} />
        </>
    );
}

export default CreateAlbum;

// First thing we did after putting the samethings from create and edit into a new component was call on AlbumForm components and pass submitHandler from Create into it as props. We found that we were getting errors because our album and errors state was not defined in create and edit anymore. We can only pass things down as props, like from create down to album form. We cant pass up. So we can either leave these state in our create/edit or define them in App.js and pass them down. We pass them down from app.js, then need to pass them down to album form too.
