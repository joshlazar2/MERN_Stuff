import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Pokemon = (props) => {

    const { pokeName } = useParams()

    const [pokemon, setPokemon] = useState(null) //nothing as a value until we asign it an object

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then((response) => {
                console.log(response.data);
                setPokemon(response.data.sprites.front_shiny)
            })

            .catch((err) => {
                console.log(err);
            })

    }, [])


return (
    <div>
        {
            pokemon?
            <img src={pokemon} alt="pokemon" />:
            <h2>...awaiting pokemon</h2>
        }
    </div>
);
}

export default Pokemon;
