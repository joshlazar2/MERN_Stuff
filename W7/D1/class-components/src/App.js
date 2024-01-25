import React, {Component} from 'react';
import './App.css';


// All class components extend from the base (Component) class in react
class App extends Component {

  // state will go here, no hooks in oop (useState)
  state = {
    players: [
      {name: 'kevin durant', position: 'small forward'}, 
      {name: 'kyrie irving', position: 'guard'}
    ]
  }

  // We have to add the render() method and whatever JSX we want to return will reside in it
  render(){
    return (
      <div className="App">
        <h1>Hello class component</h1>
        {
          this.state.players.map((player, idx) => (
            <div key={idx}>
              <p>{player.name}</p>
              <p>{player.position}</p>
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
