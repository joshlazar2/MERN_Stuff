
const Form = (props) => {

    let {pokemon, setPokemon} = props

    let {pokeList, setPokeList} = props

    const changeHandler = (event) => {
        setPokemon({[event.target.name]:event.target.value})
        // setShow(prevState => ({...prevState, [event.target.name]:event.target.value}))
    }

    const submitHandler = (event) => {
        event.preventDefault()
        // console.log(`${JSON .stringify(show)} is the new show`);
        setPokeList([...pokeList, pokemon])
        
    }

    return (
        <form id="poke-form" onSubmit={submitHandler}>
            <h1>I choose You!</h1>
            <div className="form-group">
                <label htmlFor="pokemon">Search: </label>
                <input type="text" name="name" placeholder='...awaiting pokemon name' onChange={changeHandler} />
                <input type="submit" value="Generate Pokemon Card" />
            </div>
        </form>
    )

}

export default Form