import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OneProduct = (props) => {

    const [product, setProduct] = useState({})

    const {id} = useParams()

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/findProduct/${id}`)
            .then((res) => {
                console.log(res);
                setProduct(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <h1>Product</h1>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    );
}

export default OneProduct;
