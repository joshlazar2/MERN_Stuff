import React, {useState} from 'react';

const FormObject = (props) => {

    const [show, setShow] = useState({
        title: "",
        releaseYear: 1920,
        genre: ""
    })

    const changeHandler = (event) => {
        setShow({...show, [event.target.name]:event.target.value})
        // setShow(prevState => ({...prevState, [event.target.name]:event.target.value}))
    }

    return (
        <div>
            <form>
                <label htmlFor="title">Title:</label>
                <input type="text" name='title' id='title' onChange={changeHandler}/>

                <label htmlFor="releaseYear">Release Year:</label>
                <input type="number" name='releaseYear' id='releaseYear' onChange={changeHandler}/>

                <label htmlFor="genre">Genre:</label>
                <input type="text" name='genre' id='genre' onChange={changeHandler}/>
            </form>
        </div>
    );
}

export default FormObject;
