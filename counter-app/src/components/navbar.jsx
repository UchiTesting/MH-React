import React from 'react'

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <span className="badge badge-pill badge-secondary">{props.totalCounters}</span>
        </nav>
    )
}

export default NavBar