import Nav from './components/Nav';
import './App.css';
import Shows from './components/Shows';


function App(props) {
  return (
    <div className="App">
      <Nav name={'Josh'}/>
      <Shows title={'Breaking Bad'} releaseYear={'2008'}/>
      <Shows title={'The Office'} releaseYear={'2005'}/>
      <Shows title={'GOT'} releaseYear={'2013'}/>
      <Shows title={'Pokemon'} releaseYear={'1999'}/>
      <Shows title={'Starnger Things'} releaseYear={'2016'}/>
    </div>
  );
}

export default App;


