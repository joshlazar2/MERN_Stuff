import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = (props) => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const changeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/api/login', user, {withCredentials:true})
            // withCredentials allows the cookie to be sent from server to client
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email" onChange={changeHandler} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" onChange={changeHandler} />
                </div>
                <button className='btn btn-primary'>Login</button>
            </form>
        </div>
    );
}

export default Login;
