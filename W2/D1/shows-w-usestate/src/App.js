import './App.css';
import Shows from './components/Shows';


function App() {
  return (
    <div className="App">
      <h1>useState with props</h1>
      <Shows title={'Breaking Bad'} releaseYear={'2008'} sales={100}/>
      <Shows title={'Outer Banks'} releaseYear={'2018'} sales={150}/>
      <Shows title={'The Office'} releaseYear={'2005'} sales={900}/>
    </div>
  );
}

export default App;
