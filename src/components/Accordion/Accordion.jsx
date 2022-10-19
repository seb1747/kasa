import React from 'react'
import './Accordion.css'

export default function Accordion({description, equipments}) {
    
  return (
    <div className='location__wrapper'>
      <div id="location__info">
        <details className="location__info__details">
            <summary className="location__info__title">
                Description <i className="fa-solid fa-chevron-down"></i>
            </summary>
            <p className="location__info__text">{description}</p>
        </details>
      </div>

      <div id="location__info">
        <details className="location__info__details">
            <summary className="location__info__title">
               Équipements <i className="fa-solid fa-chevron-down"></i>
            </summary>
            <ul className="location__info__text">
                {equipments.map ((equipment)=>{
                    return <li key = {`${equipment}`}>{equipment}</li>
                })}
            </ul>
        </details>
      </div>
    </div>
  )
}
