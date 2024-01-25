import './App.css';
import {Routes, Route} from 'react-router-dom';
import Form from './components/Form';
import Home from './components/Home';
import Nav from './components/Nav';
import Pokemon from './components/Pokemon';

function App(props) {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/pokemon' element={<Pokemon />} />
        <Route path='/pokemon/:pokeName' element={<Pokemon />} />
      </Routes>
    </div>
  );
}

export default App;
