
import React, {useState, useRef, useEffect}from 'react'
import './Accordion.css'
import Chevron from '../../assets/images/chevron.svg'

export default function AccordionRespect() {

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
            <h1 className="accordionTitle">Respect</h1>
            <img src={Chevron} alt="chevron down" />
        </div>
      <div ref={refHeight} 
      className={toggle? 'accordionToggle animated' : 'accordionToggle'}
      style = {{height: toggle ? `${heightEl}`: "0px"}}>
        
        <p 
        aria-hidden = {toggle ? "true" : "false"}>
           La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatiore ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        </p>
      </div>
    </div>
  )
}
