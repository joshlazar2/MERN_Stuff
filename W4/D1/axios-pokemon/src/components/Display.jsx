import React from 'react';

const Display = (props) => {
    let {pokemonList, setPokemonList} = props

    return (
        <div>
            {
                pokemonList.map( (pokemon, idx) => (
                    <div key={idx}>
                        <h2>{pokemon.name}</h2>
                    </div>
                ))
            }
        </div>
    );
}

export default Display;
