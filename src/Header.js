import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <nav className="navbar">
            <div className="header bg-light w-100 mt-2 border border-black text-left p-4">
                <h1 className="header-title">Microblog</h1>
                <p>Get in the Rithm of blogging</p>
                <NavLink to="/"><span className="p-4">Blog</span></NavLink>
                <NavLink to="/new">Add a new post</NavLink>
            </div>
        </nav>
    )
}

export default Header;