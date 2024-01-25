import ShowForm from './components/ShowForm'
import { useState } from 'react';
import DisplayShows from './components/DisplayShows';

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
