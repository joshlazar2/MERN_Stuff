import axios from 'axios'

const Form = (props) => {

    let {pokemon, setPokemon} = props

    let {pokeList, setPokeList} = props

    const changeHandler = (event) => {
        setPokemon({[event.target.name]:event.target.value})
        // setShow(prevState => ({...prevState, [event.target.name]:event.target.value}))
    }

    const submitHandler = (event) => {
        event.preventDefault()
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.pokeName}`)
            .then((response) => {
                console.log(response.data);
                setPokeList([...pokeList, {
                    'pokemonName': response.data.name,
                    'sprites': response.data.sprites.front_default,
                    'type': response.data.types[0].type.name,
                    'checked': false
                }])
            })
            .catch((err) => console.log(err))
        // setPokeList([...pokeList, pokemon])
        
    }

    return (
        <form id="poke-form" onSubmit={submitHandler}>
            <h1>I choose You!</h1>
            <div className="form-group">
                <label htmlFor="pokemon">Search: </label>
                <input type="text" name="pokeName" placeholder='...awaiting pokemon name' onChange={changeHandler} />
                <input type="submit" value="Generate Pokemon Card" />
            </div>
        </form>
    )

}

export default Form