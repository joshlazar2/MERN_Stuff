import React from "react";

const Nav = (props) => {
    return (
        <div>
            <h1>Hello {props.name}</h1>
            <span>Link</span>
            <span>Link</span>
            <span>Link</span>
            <button className="custom-btn">Add</button>
        </div>
    )
}
export default Nav;
