import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
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
                <input type="color" onChange={(e) => setColor(e.target.value)}/>
                <label>Enter a number: </label>
                <input type="number" onChange={(e) => setNumber(e.target.value)}/>
                <button>submit</button>
            </form>
        </div>
)}

export default Form;