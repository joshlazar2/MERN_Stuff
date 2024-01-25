import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const CreateProduct = (props) => {

    const [product, setProduct] = useState({
        title: '',
        price: 0,
        description: ''
    })

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/api/createProduct', product)
                .then((res) => {
                    console.log(res);
                    setProduct({
                        title: '',
                        price: 0,
                        description: ''
                    })
                })
                .catch((err) => {
                    console.log(err.response.data.errors);
                    setErrors(err.response.data.errors)
                })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <h1>Add Your Product</h1>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" onChange={changeHandler} value={product.title}/>
                    {
                        errors.title?
                        <p>{errors.title.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" name="price" onChange={changeHandler} value={product.price}/>
                    {
                        errors.price?
                        <p>{errors.price.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" name="description" onChange={changeHandler} value={product.description}/>
                    {
                        errors.description?
                        <p>{errors.description.message}</p>:
                        null
                    }
                </div>
                <button>Add Product</button>
            </form>
        </div>
    );
}

export default CreateProduct;
