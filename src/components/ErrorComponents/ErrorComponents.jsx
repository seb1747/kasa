import React from 'react'
import {Link} from 'react-router-dom'
import './ErrorComponents.css'

export default function ErrorComponents() {
  return (
    <div className='errorWrapper'>
      <h1 className = 'errorTitle'>404</h1>
      <p className = 'errorMessage'>Oups! La page que vous demandez n'existe pas.</p>
      <Link to='/'>
        <p className="errorLink">
          Retourner sur la page d'accueil
        </p>
      </Link>
      
    </div>
  )
}
