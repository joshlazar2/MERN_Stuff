// Set up for our global state
import {createContext, useState} from 'react';

export const userContext = createContext()

export const UserProvider = (props) => {
    // set up our state

    const [userList, setUserList] = useState([])

    return(
    // return UserProvider with state
    <userContext.Provider value={{
        userList,
        setUserList
    }}>
        {props.children} 
    </userContext.Provider>
    )
}

// we have props.children because we will be wrapping this around components