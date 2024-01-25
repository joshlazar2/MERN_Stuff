import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Display from './components/Display';
import CreateShow from './components/CreateShow';
import OneShow from './components/OneShow';
import EditShow from './components/EditShow';

function App() {

  const [showList, setShowList] = useState([])

  return (
    <div className="App">
      <h1>Welcome to our TvShow App</h1>
      <Link to={'/createShow/form'}>Add your favorite show</Link>
      <br />
      <Link to={'/'}>Home</Link>
      <Routes>
        <Route path='/' element={<Display showList={showList} setShowList={setShowList}/>} />
        <Route path='/createShow/form' element={<CreateShow />}/>
        <Route path='/viewShow/:id' element={<OneShow />} />
        <Route path='/editShow/:id' element={<EditShow />}/>
      </Routes>
    </div>
  );
}

export default App;
