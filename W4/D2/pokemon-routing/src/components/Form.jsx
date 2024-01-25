import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Form = (props) => {

    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [pokemon, setPokemon] = useState('')
    
    const submitHandler = (e) => {
        e.preventDefault();
        pokemon.length > 0 ?
        navigate(`/pokemon/${pokemon}`):
        setError('Type a valid pokemon')
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Choose Your Pokemon!</label>
                <input type="text" onChange={(e) => setPokemon(e.target.value)} />
                <button>Submit</button>
            </form>
            {
                error != '' ? <h2>{error}</h2>: null
            }
        </div>
    );
}

export default Form;
