import React from 'react';
import axios from 'axios'

const Form = (props) => {
    let {pokemon, setPokemon, pokemonList, setPokemonList} = props

    const changeHandler = (event) => {
        setPokemon({[event.target.name]:event.target.value})
        // setShow(prevState => ({...prevState, [event.target.name]:event.target.value}))
    }

    const submitHandler = (event) => {
        event.preventDefault()
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.pokemonName}`)
            .then((response) => {
                setPokemonList([...pokemonList, {
                    'name': response.data.name
                }])
            })
            .catch((err) => console.log(err))
    }
    return (
        <form id="poke-form" onSubmit={submitHandler}>
            <h1>I choose You!</h1>
            <div className="form-group">
                <label htmlFor="pokemon">Search: </label>
                <input type="text" name="pokemonName" placeholder='...awaiting pokemon name' onChange={changeHandler} />
                <input type="submit" value="Generate Pokemon Card" />
            </div>
        </form>
    );
}

export default Form;
