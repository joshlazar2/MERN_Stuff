import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditOne = () => {

    const navigate = useNavigate();

    const { id } = useParams()

    const [pokemon, setPokemon] = useState({})

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setPokemon({ ...pokemon, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/findPokemon/${id}`)
            .then((response) => {
                console.log(response);
                setPokemon(response.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/updatePokemon/${id}`, pokemon)
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
            <form onSubmit={submitHandler}>
                <img src={pokemon.image} alt="" />
                <label>Nickname</label>
                <input type="text" name='nickname' onChange={changeHandler} value={pokemon.nickname} />
                <button type='submit'>Edit Pokemon</button>
            </form>
        </div>
    );
}

export default EditOne;
