import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import {useState, useEffect} from 'react'

// 1. WHAT METHOD ARE WE GOING TO USE TO MAKE MULTIPLE CARDS APPEAR?
// 2. WHAT KIND OF DATA WILL ALLOW US TO USE THAT METHOD?
// 3. WHAT MIGHT OUR COMPONENTS NEED FROM OUR APP TO ACCOMPLISH THE TASK?
// 4. DO WE NEED TO LIFT STATE?



function App() {
  const [pokemon, setPokemon] = useState('')

  const [pokeList, setPokeList] = useState([])
  return (
    <div className="App">
      <Form pokemon={pokemon} setPokemon={setPokemon} pokeList={pokeList} setPokeList={setPokeList}/>
      <Display pokeList={pokeList} setPokeList={setPokeList} pokemon={pokemon} setPokemon={setPokemon}/>
    </div>
  );
}

export default App;
