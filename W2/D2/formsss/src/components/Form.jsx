import React, {useState} from 'react';

const Form = (props) => {

    const [title, setTitle] = useState('')

    const [releaseYear, setReleaseYear] = useState(1920)

    const [genre, setGenre] = useState('')

    const handleGenre = (event) => {
        console.log(event);
        setGenre(event.target.value)
    }

    return (
        <div>
            <form>
                <label htmlFor="title">Title:</label>
                <input type="text" name='title' id='title' onChange={ (event) => setTitle(event.target.value) }/>

                <label htmlFor="releaseYear">Release Year:</label>
                <input type="number" name='releaseYear' id='releaseYear' onChange={ (event) => setReleaseYear(event.target.value) }/>

                <label htmlFor="genre">Genre:</label>
                <input type="text" name='genre' id='genre' onChange={handleGenre}/>

                <h1>Title: {title}</h1>
                <p>Release Year: {releaseYear}</p>
                <p>Genre: {genre}</p>
            </form>
        </div>
    );
}

export default Form;
