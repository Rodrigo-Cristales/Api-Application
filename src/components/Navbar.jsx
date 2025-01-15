import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

function Navbar() {
    return (
    <>
        <nav className='navbar'>
            <ul>
                <li>
                    <Link to = '/' className='nav-link'>Home</Link>
                </li>
                <li>
                    <Link to = '/usuarios' className='nav-link'>Lista Usuarios</Link>
                </li>
            </ul>
        </nav>
    </>
)
}

export default Navbar
