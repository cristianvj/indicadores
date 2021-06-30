import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-success">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-white" href="#!">Indicadores Mallamas EPS-I</Link>
            </div>
        </nav>
    )
}

export default Navbar
