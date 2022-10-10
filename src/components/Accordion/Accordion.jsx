import React from 'react'
import { useParams } from 'react-router-dom'
import Data from '../../data.json'

export default function Accordion() {
    const {id} = useParams();
    const AccordionData = Data.find((accordion) => accordion.id === id);
    
    const {description, equipments} = AccordionData
  return (
    <div>
      <div id="location__info">
        <details className="location__info_details">
            <summary className="location__info__title">
                Description <i className="fa-solid fa-chevron-down"></i>
            </summary>
            <p className="location__info__text">{description}</p>
        </details>
      </div>

      <div id="location__info">
        <details className="location__info_details">
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
