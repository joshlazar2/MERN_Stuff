import React, {useState} from 'react';
import PokeBall from '../img/pokeball.png';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const CreateOne = () => {

    const navigate = useNavigate();

    const [pokemon, setPokemon] = useState({
        name: '',
        nickname: '',
        image: PokeBall,
        type: ''
    })

    const [errors, setErrors] = useState({
        searchErrors: '',
        postErrors: ''
    })

    const changeHandler = (e) => {
        setPokemon({...pokemon, [e.target.name]: e.target.value})
    }

    const searchHandler = (e) => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name.toLowerCase()}`)
            .then((res) => {
                console.log(res);
                setPokemon({
                    name: res.data.name,
                    nickname: '',
                    image: res.data.sprites.front_default,
                    type: res.data.types[0].type.name
                })
                setErrors({})
            })
            .catch((err) => {
                console.log(err)
                setErrors({...errors, searchErrors: "Must be a valid Pokemon Name"})
            })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/api/createPokemon', pokemon)
                .then((res) => {
                    console.log("Success, you added a pokemon to your party", res.data);
                    navigate('/')
                })
                .catch((err) => {
                    console.log(err);
                    setErrors(err.response.data.error.errors)
                })
    }
    

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>PokeSearch:</label>
                <input type="text" name="name" onChange={changeHandler}/>
                {
                    errors.searchErrors?
                    <p>{errors.searchErrors}</p>:
                    null
                }
                <br />
                <img src={pokemon.image} alt="" />
                {
                    pokemon.name !== '' && pokemon.type !== '' ?
                    <ul>
                        <h4>Name: {pokemon.name}</h4>
                        <h4>Type: {pokemon.type}</h4>
                        {errors.nickname ? <p>{errors.nickname.message}</p>: null}
                        <label>Nickname</label>
                        <input type="text" placeholder="Nickname" name='nickname' onChange={changeHandler}/>
                    </ul>:
                    null
                    
                }
                <button type='button' onClick={searchHandler}>Check Pokemon</button>
                <br />
                <button type='submit'>Add Pokemon</button>
            </form>
        </div>
    );
}

export default CreateOne;
