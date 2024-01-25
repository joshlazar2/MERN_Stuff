import React, {useState, useContext} from 'react';
import { userContext } from '../context/UserContext';

const DisplayUsers = (props) => {

    const {userList, setUserList} = useContext(userContext)

    return (
        <div>
            {
                userList.map((user) => (
                    <p>user: {user}</p>
                ))
            }
        </div>
    );
}

export default DisplayUsers;
