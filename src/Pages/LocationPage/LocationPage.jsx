import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import Info from '../../components/Info/Info'
import Accordion from '../../components/Accordion/Accordion'
import Data from '../../data.json'
import {useParams} from 'react-router-dom'

export default function LocationPage() {
  const {id} = useParams();
 
  const infoLocation = Data.find ((location)=> location.id === id) 
 
  if(infoLocation !==undefined) {
  const { title , location, tags , host, rating, pictures, description, equipments} = infoLocation
   return (

    <div>       
        <Carousel pictures={pictures}/>
        <Info title={title} location= {location} tags={tags} host={host} rating={rating}/>
        <Accordion description={description} equipments={equipments}/>       
    </div>
  ) 
   }else{
    window.location.href ="/404";    
   }
}
