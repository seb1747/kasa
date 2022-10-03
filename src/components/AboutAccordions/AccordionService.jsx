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
            <h1 className="accordionTitle">Service</h1>
            <img src={Chevron} alt="chevron down" />
        </div>
      <div ref={refHeight} 
      className={toggle? 'accordionToggle animated' : 'accordionToggle'}
      style = {{height: toggle ? `${heightEl}`: "0px"}}>
        
        <p 
        aria-hidden = {toggle ? "true" : "false"}>
           Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacterr si vous avez la moindre question.
        </p>
      </div>
    </div>
  )
}
