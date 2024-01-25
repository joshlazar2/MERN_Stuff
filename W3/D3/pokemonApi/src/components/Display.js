
const Display = (props) => {

    let {pokeList, setPokeList} = props

    let {pokemon, setPokemon} = props

    const deleteHandler = (pokemonFromMap) => {
        setPokeList(pokeList.filter((allOtherPokemon) => allOtherPokemon !== pokemonFromMap))
    }

    const faintHandler = (pokemonFromMap) => {
        pokemonFromMap.checked = !pokemonFromMap.checked
        setPokeList([...pokeList])
        console.log(pokemonFromMap.checked)
    }

    return (
        <div className="poke-party">
            {
                pokeList.map( (pokemon, idx) => (
                    <div id='cards' key={idx}>
                        <h2>{pokemon.pokemonName}</h2>
                        <img src={pokemon.sprites} alt="" />
                        <h2>{pokemon.type}</h2>
                        <div className="update-delete">
                            <button onClick={() => deleteHandler(pokemon)}>Delete</button>
                            <label htmlFor="faint">Faint:</label>
                            <input type="checkbox" name="faint" onChange={() => faintHandler(pokemon)}/>
                        </div>
                    </div>
                    
                ))
            }
        </div>
    )

}

export default Display