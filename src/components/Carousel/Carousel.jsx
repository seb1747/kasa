import React, {useState, } from 'react'
import location from '../../data.json'
import {useParams} from 'react-router-dom'
import './Carousel.css'


export default function Carousel() {

  const { id } = useParams();
  const locationPictures = location.find((object) => object.id === id)
  const { pictures } = locationPictures;

  const [locPict, setlocPict] = useState(0)

  /**
 *on appel l'image suivantes
 */
const nextPicture = () =>{
  setlocPict(locPict === pictures.length -1 ? 0 : locPict +1)
}

/** 
 * on appelle l'image précédente
 */

const previousPicture = () =>{
  setlocPict(locPict === 0 ? pictures.length -1 : locPict -1);
}

  return (
    <section id='carouselWrapper'>
      {/*on créer les bouton de navigation*/}
      {pictures.length > 1 && <i className="fa-solid fa-chevron-left" onClick={previousPicture}></i>}
      {pictures.length > 1 && <i className="fa-solid fa-chevron-right" onClick={nextPicture}></i>}
      
      {/*intégrations des images du carousel */}
      {pictures.map ((img, index) =>{
        return (
          <div key ={index}>
            {index === locPict && <img src={img} alt= "photos de la location" className='carousel__img'/>}
            {index === locPict && (
              <span className='carousel__img__number'>
                {locPict +1 }/{pictures.length}
              </span>
            )}
            
          </div>
        )
      })}
    
      
    </section>
  )
}
