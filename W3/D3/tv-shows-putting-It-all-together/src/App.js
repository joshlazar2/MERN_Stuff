import './App.css';
import { useState } from 'react';
import ShowForm from './components/ShowForm'
import DisplayShows from './components/DisplayShows'

function App() {
  const [showList, setShowList] = useState([])

  return (
    <div className="App">
      <ShowForm showList={showList} setShowList={setShowList} test={test}/>
      <DisplayShows showList={showList} setShowList={setShowList}/>
    </div>
  );
}

export default App;
