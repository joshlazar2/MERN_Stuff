import React from 'react';
import './DisplayShows.css'

const DisplayShows = (props) => {
    let {showList, setShowList} = props
    
    const toggleShow = (show) => {
        // showFromMap.watchedShow = !showFromMap.watchedShow
        // setShowList([...showList])
        const updatedShowList = showList.map((tvShow) => {
            if(tvShow === show){
                tvShow.watchedShow = !tvShow.watchedShow
            }
            return tvShow
        })
        console.log(updatedShowList)
        setShowList(updatedShowList)
    }

    const deleteHandler = (show) => {
        // setShowList(showList.filter( (allOtherShows) => allOtherShows !== showFromMap))
        const updatedShowList = showList.filter((tvShow) => tvShow !== show)
        setShowList(updatedShowList)
    }
    return (
        <div>
            {
                showList.map( (show, idx) => (
                    <div key={idx}>
                        {
                            show.watchedShow?
                            <h2 className='line-through'>Title: {show.title}</h2>:
                            <h2>Title: {show.title}</h2>
                        }
                        <h2>Release Year: {show.releaseYear}</h2>
                        <h2>Genre: {show.genre}</h2>
                        <span>Watched this Show</span>
                        <input type="checkbox" name="watchedShow" checked={show.watchedShow} onClick={() => toggleShow(show)}/>
                        <button onClick={() => deleteHandler(show)}>Delete</button>
                    </div>
                    
                ))
            }
        </div>
    );
}

export default DisplayShows;
