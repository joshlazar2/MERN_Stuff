import React from 'react';
import {Link} from 'react-router-dom';

const Nav = (props) => {
    return (
        <div style={{display:'flex', justifyContent: 'space-between', padding: '35px', backgroundColor: 'cyan'}}>
            <Link to={'/pokemon'}>Pokemon</Link>
            <Link to={'/'}><h2>Home</h2></Link>
            <Link to={'/form'}>Form</Link>
        </div>
    );
}

export default Nav;
