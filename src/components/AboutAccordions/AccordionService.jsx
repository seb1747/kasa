import React from 'react'
import './AboutAccordion.css'

export default function AccordionFiability() {

    


  return (
    
    <div id="about__info">
      <details className="about__info__details">
          <summary className="about__info__title">
              Services <i className="fa-solid fa-chevron-down"></i>
          </summary>
          <p className="about__info__text">
            Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
          </p>
      </details>
    </div>
  )
}
