import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

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
        <div>
            <h1>Yoooo Dashboard</h1>
            <button onClick={logoutUser}>Logout</button>
        </div>
    );
}

export default Dashboard;
