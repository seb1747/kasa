import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar_container">
    <nav className='navbar'>
        <Link to="/" className='navbar_link'>Accueil</Link>
        <Link to = "/About" className='navbar_link'>À propos</Link>
    </nav>
    </div>
  )
}
