import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import React, {useState} from 'react';

function App(props) {
  const [todoList, setTodoList] = useState([])

  return (
    <div className="App">
      <Form todoList={todoList} setTodoList={setTodoList}/>
      <Display todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
