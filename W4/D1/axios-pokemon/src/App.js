import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Display from './components/Display';
import Form from './components/Form';

function App(props) {
  const [pokemon, setPokemon] = useState('')

  const [pokemonList, setPokemonList] = useState([])

  const [allPokemon, setAllPokemon] = useState([])
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    .then((response) => {
      console.log(response);
      setAllPokemon(response.data.results)
    })

    .catch((err) => {
      console.log(err);
    })

  },[])

  return (
    <div className="App">
      {/* <Form pokemon={pokemon} setPokemon={setPokemon} pokemonList={pokemonList} setPokemonList={setPokemonList}/>
      <Display pokemon={pokemon} setPokemon={setPokemon} pokemonList={pokemonList} setPokemonList={setPokemonList}/> */}
      {
        allPokemon.map( (pokemon, idx) => (
          <div key={idx}>
            <h2>Name: {pokemon.name}</h2>
          </div>
        ))
      }
    </div>
  );
}

export default App;
