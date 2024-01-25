import './App.css';
import Alert from './components/Alert';
import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const alertButton = () => {
    alert('you clicked me')
  }
  
  const increaseCount = () => {
    setCount(count+1)
    // setCount((prevState) => prevState+1) this ensures state (count) is updated immediately, either can be used. ^^is more common though.
  }
  
  const changeTitle = () => {
    setTitle('Titanic')
  }

  //     Getter, Setter
  const [count, setCount] = useState(0) // setCount is a function to change the count

  const [title, setTitle] = useState('Title')
  return (
    <div className="App">
      <h1>Synthetic Events</h1>
      <button onClick={ ()=> alert('you clicked me')}>Click Me!</button> 
      {/* Instead of onClick={ ()=> alert('you clicked me')}, you can do onClick={alertButton} */}
      
      <Alert />

      <h2>Using the useState hook</h2>
      <h3>The current coint is: {count}</h3>
      <button onClick={ ()=> setCount(count+1)}>Increase Count</button>
      {/* Instead of onClick={ ()=> setCount(count+1)}, you can do onClick={increaseCount} */}

      <h2>The title is: {title}</h2>
      <button onClick={changeTitle}>Change Title</button>

      <Counter/>
    </div>
  );
}

export default App;
