import React from 'react'
import AboutBanner from '../../components/AboutBanner/AboutBanner'
import AccordionFiability from '../../components/AboutAccordions/AccordionFiability'
import AccordionRespect from '../../components/AboutAccordions/AccordionRespect'
import AccordionService from '../../components/AboutAccordions/AccordionService'
import AccordionSecurity from '../../components/AboutAccordions/AccordionSecurity'


export default function About() {
  return (
    <div>      
      <AboutBanner/>
      <AccordionFiability/>
      <AccordionRespect/>
      <AccordionService/>
      <AccordionSecurity/>
    </div>
  )
}
