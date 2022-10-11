import React from 'react'
import './AboutAccordion.css'

export default function AccordionFiability() {



  return (
    
    <div id="about__info">
      <details className="about__info__details">
          <summary className="about__info__title">
             Sécurité <i className="fa-solid fa-chevron-down"></i>
          </summary>
          <p className="about__info__text">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
          </p>
      </details>
    </div>
  )
}
