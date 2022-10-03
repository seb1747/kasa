import React, {useState, useRef, useEffect}from 'react'
import './Accordion.css'
import Chevron from '../../assets/images/chevron.svg'

export default function AccordionFiability() {

    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();

    const toggleState =() =>{
        setToggle(!toggle);
    }

    const refHeight = useRef();

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    },[])




  return (
    <div className='accordion' >
        <div 
        onClick={toggleState}
        className="accordionVisible">
            <h1 className="accordionTitle">Sécurité</h1>
            <img src={Chevron} alt="chevron down" />
        </div>
      <div ref={refHeight} 
      className={toggle? 'accordionToggle animated' : 'accordionToggle'}
      style = {{height: toggle ? `${heightEl}`: "0px"}}>
        
        <p 
        aria-hidden = {toggle ? "true" : "false"}>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons égalementdes atliers sur la sécurités domestique pour nos hôtes.
        </p>
      </div>
    </div>
  )
}
