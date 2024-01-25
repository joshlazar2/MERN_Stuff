import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Pokeball from './img/pokeball.png';
import CreateOne from './components/CreateOne';
import DisplayAll from './components/DisplayAll';
import DisplayOne from './components/DisplayOne';
import EditOne from './components/EditOne';

function App() {

  const [pokeList, setPokeList] = useState([])

  return (
    <div className="App">
      <nav>
        <Link to={'/'}><img src={Pokeball} alt='Logo' /></Link>
        <h1>Welcome to the PokeCenter</h1>
        <Link to={'/pokedex'}>Pokedex</Link>
      </nav>
      <Routes>
        <Route path='/' element={<DisplayAll pokeList={pokeList} setPokeList={setPokeList} />} />
        <Route path='/pokedex' element={<CreateOne />} />
        <Route path='/displayOne/:id' element={<DisplayOne />} />
        <Route path='/editOne/:id' element={<EditOne />} />
      </Routes>
    </div>
  );
}

export default App;
