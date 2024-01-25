import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Nav = () => {

    const navigate = useNavigate();

    const logoutUser = () => {
        axios
            .post('http://localhost:8000/api/logout', {}, {withCredentials:true})
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='d-flex justify-content-between'>
            <h1>Records Dot Com</h1>
            <Link to={'/createAlbum/form'}>Post an Album</Link>
            <Link to={'/'}>Home</Link>
            <Link to={'/register'}>Register</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/profile'}>Profile</Link>
            <button onClick={logoutUser}>Logout</button>
        </div>
    );
}

export default Nav;
