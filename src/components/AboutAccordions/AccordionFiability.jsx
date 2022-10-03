import React, {useState, useRef, useEffect}from 'react'
import './Accordion.css'
import Chevron from '../../assets/images/chevron.svg'
import ChevronUp from '../../assets/images/chevronUp.svg'

export default function AccordionFiability() {

    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();
    const [imgState, setImgState]= useState();

    const toggleImgState = () => {
      setImgState(!imgState);
    }

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
            <h1 className="accordionTitle">Fiabilité</h1>
            <img 
            onClick={toggleImgState}
            src= {Chevron}  alt="chevron" />
        </div>
      <div ref={refHeight} 
      className={toggle? 'accordionToggle animated' : 'accordionToggle'}
      style = {{height: toggle ? `${heightEl}`: "0px"}}>
        
        <p 
        aria-hidden = {toggle ? "true" : "false"}>
           Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conforment aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
        </p>
      </div>
    </div>
  )
}