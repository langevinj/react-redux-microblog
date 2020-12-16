import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className="container-fluid">
        <div className="header bg-light float-left w-50 mt-2 border border-black">
            <h1 className="header-title">Microblog</h1>
            <p>Get in the Rithm of blogging</p>
            <NavLink to="/"><span className="p-4">Blog</span></NavLink>
            <NavLink to="/new">Add a new post</NavLink>
        </div>
        </div>
    )
}

export default Header;