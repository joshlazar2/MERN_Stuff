import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import CreateProduct from './components/CreateProduct';
import Display from './components/Display';
import OneProduct from './components/OneProduct';

function App() {

  const [productList, setProductList] = useState([])

  return (
    <div className="App">
      <Link to={'/'}>Home</Link>
      <br />
      <Link to={'/display'}>All Products</Link>
      <Routes>
        <Route path='/' element={<CreateProduct />} />
        <Route path='/display' element={<Display productList={productList} setProductList={setProductList} />} />
        <Route path='/viewProduct/:id' element={<OneProduct />} />
      </Routes>
    </div>
  );
}

export default App;
