import React, {useState} from 'react';

const ShowForm = (props) => {

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
            <h1>Show Form!</h1>
            <form>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name='title' id='title' onChange={changeHandler}/>
                    {
                        show.title.length < 3?
                        <p>Title Must be 3 or more characters</p>:
                        null
                    }
                </div>
                <div>
                    <label htmlFor="releaseYear">Release Year:</label>
                    <input type="number" name='releaseYear' id='releaseYear' onChange={changeHandler}/>
                    {
                        show.releaseYear < 1920?
                        <p>Release Year Must Be no earlier than 1920</p>:
                        null
                    }
                </div>
                <div>
                    <label htmlFor="genre">Genre:</label>
                    <input type="text" name='genre' id='genre' onChange={changeHandler}/>
                    {
                        show.genre.length < 3?
                        <p>Genre Must be 3 or more characters</p>:
                        null
                    }
                </div>
            </form>
        </div>
    );
}

export default ShowForm;
