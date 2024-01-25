import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OneShow = (props) => {

    const [show, setShow] = useState({})

    const {id} = useParams()

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/findShow/${id}`)
            .then((res) => {
                console.log(res);
                setShow(res.data) // inour controller we response with res.json(oneShow). So our res.data is an object itself. Prev we did res.json({Show: oneShow}), so we would have done res.data.Show
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <h1>Show</h1>
            <p>Title: {show.title}</p>
            <p>Release Year: {show.releaseYear}</p>
            <p>Network: {show.network}</p>
            <p>Creator: {show.creator}</p>
            <p>Genre: {show.genre}</p>
        </div>
    );
}

export default OneShow;
