import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Word from './components/Word';
import Form from './components/Form';

function App(props) {
  return (
    <div className="App">
      <h1>Routing in React with React Router Dom!</h1>
      <Link to={'/home'}>Home</Link>
      <br />
      <Link to={'/about'}>About</Link>
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/word/:color/:number' element={<Word/>}/>
      </Routes>
    </div>
  );
}

export default App;
