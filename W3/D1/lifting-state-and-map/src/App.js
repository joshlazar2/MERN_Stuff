import React, {useState} from 'react';
import './App.css';
import DisplayShows from './components/DisplayShows';
import ShowForm from './components/ShowForm';

function App() {
  const [showList, setShowList] = useState([])

  return (
    <div className="App">
      <ShowForm showList={showList} setShowList={setShowList}/>
      <DisplayShows showList={showList} setShowList={setShowList}/>
    </div>
  );
}

export default App;
