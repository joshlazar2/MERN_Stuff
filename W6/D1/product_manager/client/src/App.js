import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import CreateProduct from './components/CreateProduct';

function App() {
  return (
    <div className="App">
      <CreateProduct />
    </div>
  );
}

export default App;
