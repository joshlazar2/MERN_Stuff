import React, {useState} from 'react';

const ShowForm = (props) => {

    let {showList, setShowList} = props

    console.log(props);

    const [show, setShow] = useState({
        title: "",
        releaseYear: 1920,
        genre: "",
        watchedShow: false
    })

    const changeHandler = (event) => {
        if(event.target.type  === 'checkbox'){
            setShow({...show, watchedShow: !show.watchedShow})
        }
        else{
            setShow({...show, [event.target.name]:event.target.value})
        }
        // setShow(prevState => ({...prevState, [event.target.name]:event.target.value}))
    }

    const submitHandler = (event) => {
        event.preventDefault()
        // console.log(`${JSON .stringify(show)} is the new show`);
        setShowList([...showList, show])
        setShow({
            title: "",
            releaseYear: 1920,
            genre: "",
            watchedShow: false
        })
    }

    return (
        <div>
            <h1>Show Form!</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name='title' id='title' onChange={changeHandler} value={show.title}/>
                    {
                        show.title.length < 3?
                        <p>Title Must be 3 or more characters</p>:
                        null
                    }
                </div>
                <div>
                    <label htmlFor="releaseYear">Release Year:</label>
                    <input type="number" name='releaseYear' id='releaseYear' onChange={changeHandler} value={show.releaseYear}/>
                    {
                        show.releaseYear < 1920?
                        <p>Release Year Must Be no earlier than 1920</p>:
                        null
                    }
                </div>
                <div>
                    <label htmlFor="genre">Genre:</label>
                    <input type="text" name='genre' id='genre' onChange={changeHandler} value={show.genre}/>
                    {
                        show.genre.length < 3?
                        <p>Genre Must be 3 or more characters</p>:
                        null
                    }
                </div>
                <div>
                    <label>I have watched this show</label>
                    <input type="checkbox" name="watchedShow" onClick={changeHandler} checked={show.watchedShow}/>
                </div>
                <button>Add Show</button>
            </form>
        </div>
    );
}

export default ShowForm;
