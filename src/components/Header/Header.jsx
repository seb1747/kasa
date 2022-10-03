import React from 'react'
import Navbar from '../Navbar/Navbar'
import Logo from '../../assets/images/LOGO.svg'
import './Header.css'

export default function Header() {
  return (
    <header className='headerWrapper'>
      <figure className="headerWrapper__fig">
        <img className='logo' src={Logo} alt=" logo de l'agence de location" />
      </figure>
      <Navbar/>
    </header>
  )
}
