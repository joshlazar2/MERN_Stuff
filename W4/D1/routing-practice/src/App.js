import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import Parameter from './components/Parameter';

function App() {
  return (
    <div className="App">
      <h1>Routing</h1>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/:wordOrNumber' element={<Parameter/>}/>
        <Route path='/:wordOrNumber/:color/:backgroundColor' element={<Parameter/>}/>
      </Routes>
    </div>
  );
}

export default App;
