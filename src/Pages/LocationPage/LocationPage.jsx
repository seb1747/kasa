import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import Info from '../../components/Info/Info'
import Accordion from '../../components/Accordion/Accordion'
import Data from '../../data.json'
import {useParams, useNavigate} from 'react-router-dom'

export default function LocationPage() {
  const {id} = useParams();
  const navigate = useNavigate()
  const infoLocation = Data.find ((location)=> location.id === id) 
  const { title , location, tags , host, rating, pictures, description, equipments} = infoLocation
  if(infoLocation.title===undefined) {navigate('*')}
  let idValid = false
  if (infoLocation) idValid = true; 
 
  
   return (


    <div>       
        <Carousel pictures={pictures}/>
        <Info title={title} location= {location} tags={tags} host={host} rating={rating}/>
        <Accordion descripition={description} equipments={equipments}/>
       
    </div>
  )
}
