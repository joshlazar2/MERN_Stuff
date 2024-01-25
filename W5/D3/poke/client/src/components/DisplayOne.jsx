import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DisplayOne = (props) => {

    const [pokemon, setPokemon] = useState({})

    const { id } = useParams()

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/findPokemon/${id}`)
            .then((res) => {
                console.log(res);
                setPokemon(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className='border border-dark'>
            <p>Name: {pokemon.name}</p>
            <img src={pokemon.image} alt="Pokemon" />
            <p>Nickname: {pokemon.nickname}</p>
            <p>Type: {pokemon.type}</p>
            
        </div>
    );
}

export default DisplayOne;
