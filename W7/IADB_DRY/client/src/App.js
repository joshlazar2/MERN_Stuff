import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import React, {useState} from 'react';
import Display from './components/Display';
import Nav from './components/Nav';
import CreateAlbum from './components/CreateAlbum';
import OneAlbum from './components/OneAlbum';
import EditAlbum from './components/EditAlbum';


function App() {

  const [album, setAlbum] = useState({
    albumName: '',
    artist: '',
    releaseYear: 1920,
    genre: 'Rock',
    explicit: false
})

const [errors, setErrors] = useState({})

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Display />} />
        <Route path='/createAlbum/form' element={<CreateAlbum album={album} setAlbum={setAlbum} errors={errors} setErrors={setErrors} />} />
        <Route path='/oneAlbum/:id' element={<OneAlbum />} />
        <Route path='/editAlbum/:id' element={<EditAlbum album={album} setAlbum={setAlbum} errors={errors} setErrors={setErrors} />}/>
      </Routes>
    </div>
  );
}

export default App;
