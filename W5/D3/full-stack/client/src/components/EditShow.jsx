import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const EditShow = (props) => {

    const navigate = useNavigate();

    const {id} = useParams()

    const [show, setShow] = useState({
        title: '',
        releaseYear: 1920,
        network: '',
        creator: '',
        genre: ''
    }) // Dont need created/updated at or _id because that is created by mongoose

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setShow({...show, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/findShow/${id}`)
            .then((response) => {
                console.log(response);
                setShow(response.data.show)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/updateShow/${id}`, show)
                .then((res) => {
                    console.log(res);
                    navigate('/')
                })
                .catch((err) => {
                    console.log(err.response.data.errors);
                    setErrors(err.response.data.errors)
                })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <h2>Edit Show</h2>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" onChange={changeHandler} value={show.title}/>
                    {
                        errors.title?
                        <p>{errors.title.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Release Year:</label>
                    <input type="number" name="releaseYear" onChange={changeHandler} value={show.releaseYear}/>
                    {
                        errors.releaseYear?
                        <p>{errors.releaseYear.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Network:</label>
                    <input type="text" name="network" onChange={changeHandler} value={show.network}/>
                    {
                        errors.network?
                        <p>{errors.network.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Creator:</label>
                    <input type="text" name="creator" onChange={changeHandler} value={show.creator}/>
                    {
                        errors.creator?
                        <p>{errors.creator.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Genre:</label>
                    <input type="text" name="genre" onChange={changeHandler} value={show.genre}/>
                    {
                        errors.genre?
                        <p>{errors.genre.message}</p>:
                        null
                    }
                </div>
                <button>Update Show</button>
            </form>
        </div>
    );
}

export default EditShow;
