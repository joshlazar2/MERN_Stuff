import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import AlbumForm from './AlbumForm';

const EditAlbum = (props) => {

    const {album, setAlbum, errors, setErrors} = props;

    const navigate = useNavigate();

    const {id} = useParams()

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/findAlbum/${id}`)
            .then((response) => {
                console.log(response);
                setAlbum(response.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/updateAlbum/${id}`, album)
            .then((res) => {
                console.log(res);
                setErrors({})
                navigate('/')
            })
            .catch((err) => {
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

export default EditAlbum;
