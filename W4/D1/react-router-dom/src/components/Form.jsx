import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Form = (props) => {

    const navigate = useNavigate()

    const [color, setColor] = useState('')
    const [number, setNumber] = useState(0)

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/word/${color}/${number}`)

    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Type in a color</label>
                <input type="text" onChange={(e) => setColor(e.target.value)} />
                <label>Type in a number</label>
                <input type="text" onChange={(e) => setNumber(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Form;
