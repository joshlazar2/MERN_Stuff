import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const EditProduct = (props) => {

    const navigate = useNavigate();

    const {id} = useParams()

    const [product, setProduct] = useState({
        title: '',
        price: 0,
        description: ''
    })

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/findProduct/${id}`)
            .then((response) => {
                console.log(response);
                setProduct(response.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
            axios
                .put(`http://localhost:8000/api/updateProduct/${id}`, product)
                .then((res) => {
                    console.log(res);
                    navigate('/display')
                })
                .catch((err) => {
                    console.log(err.response.data.errors);
                    setErrors(err.response.data.errors)
                })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <h1>Edit Your Product</h1>
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
                <button>Edit Product</button>
            </form>
        </div>
    );
}

export default EditProduct;
