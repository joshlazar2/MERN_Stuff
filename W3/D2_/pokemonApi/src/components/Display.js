
const Display = (props) => {

    let {pokeList, setPokeList} = props

    let {pokemon, setPokemon} = props

    return (
        <div className="poke-party">
            {
                pokeList.map( (pokemon, idx) => (
                    <div id='cards' key={idx}>
                        <h2>{pokemon.name}</h2>
                    </div>
                    
                ))
            }
        </div>
    )

}

export default Display