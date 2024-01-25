import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const DisplayAll = (props) => {

    let { pokeList, setPokeList } = props;

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/pokemon')
            .then((response) => {
                console.log(response);
                setPokeList(response.data.Pokemon)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteHandler = (id) => {
        axios
            .delete(`http://localhost:8000/api/deletePokemon/${id}`)
                .then((res) => {
                    console.log(res);
                    const updatedPokeList = pokeList.filter((pokemon) => pokemon._id !== id)
                    setPokeList(updatedPokeList)
                })
                .catch((err) => {
                    console.log(err);
                })
    }

    return (
        <div>
            <h2>Welcome to your Pokemon Party</h2>
            <div  className='d-flex justify-content-between'>
            {
                pokeList.map((pokemon) => (
                    <div key={pokemon._id} className='border border-dark'>
                        <p>Name: {pokemon.name}</p>
                        <Link to={`/displayOne/${pokemon._id}`}><img src={pokemon.image} alt="Pokemon" /></Link>
                        <p>Nickname: {pokemon.nickname}</p>
                        <p>Type: {pokemon.type}</p>
                        <button className='btn btn-danger' onClick={() => deleteHandler(pokemon._id)}>Delete</button>
                        <Link className='btn btn-primary' to={`/editOne/${pokemon._id}`}>Edit</Link>
                    </div>
                ))
            }
            </div>
        </div>
    );
}

export default DisplayAll;
