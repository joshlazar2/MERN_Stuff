import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const Display = (props) => {

    let { productList, setProductList } = props;

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/allProducts')
            .then((response) => {
                console.log(response);
                setProductList(response.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className='d-flex justify-content-between'>
            {
                productList.map((product) => (
                    <div key={product._id} className='border border-dark'>
                        <p>Title: {product.title}</p>
                        <p>Price: {product.price}</p>
                        <p>Description: {product.description}</p>
                        <Link className='btn btn-secondary' to={`/viewProduct/${product._id}`}>View</Link>
                    </div>
                ))
            }
        </div>
    );
}

export default Display;
