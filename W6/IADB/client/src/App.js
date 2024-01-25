import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Display from './components/Display';
import Nav from './components/Nav';
import CreateAlbum from './components/CreateAlbum';
import OneAlbum from './components/OneAlbum';
import EditAlbum from './components/EditAlbum';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Display />} />
        <Route path='/createAlbum/form' element={<CreateAlbum />} />
        <Route path='/oneAlbum/:id' element={<OneAlbum />} />
        <Route path='/editAlbum/:id' element={<EditAlbum />}/>
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
