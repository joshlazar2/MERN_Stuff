import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <div className='d-flex justify-content-between'>
            <h1>Records Dot Com</h1>
            <Link to={'/createAlbum/form'}>Post an Album</Link>
            <Link to={'/'}>Home</Link>
        </div>
    );
}

export default Nav;
