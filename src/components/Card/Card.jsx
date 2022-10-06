import React from 'react'
import '../../style/Card.css'

export default function Card({ cover, title}) {
  return (
    <div className='location__card'>
      <img src={cover} alt="location" />
      <h2>{title}</h2>      
    </div>
  )
}
