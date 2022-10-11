import React from 'react'
import './AboutAccordion.css'
export default function AccordionFiability() {

   

  return (
  
    <div id="about__info">
      <details className="about__info__details">
          <summary className="about__info__title">
              Fiabilité <i className="fa-solid fa-chevron-down"></i>
          </summary>
          <p className="about__info__text">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conforment aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
          </p>
      </details>
    </div>
  )
}
