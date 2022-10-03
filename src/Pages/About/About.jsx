import React from 'react'
import Header from '../../components/Header/Header'
import AboutBanner from '../../components/AboutBanner/AboutBanner'
import AccordionFiability from '../../components/AboutAccordions/AccordionFiability'
import AccordionRespect from '../../components/AboutAccordions/AccordionRespect'
import AccordionService from '../../components/AboutAccordions/AccordionService'
import AccordionSecurity from '../../components/AboutAccordions/AccordionSecurity'
import Footer from '../../components/Footer/Footer'


export default function About() {
  return (
    <div>
      <Header/>
      <AboutBanner/>
      <AccordionFiability/>
      <AccordionRespect/>
      <AccordionService/>
      <AccordionSecurity/>
      <Footer/>
    </div>
  )
}
