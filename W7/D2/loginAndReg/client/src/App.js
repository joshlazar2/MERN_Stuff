import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import React, {useState} from 'react';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
