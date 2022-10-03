import React from 'react'
import BannerImg from '../../assets/images/IMG.jpg'
import './Banner.css'


export default function Banner() {
  return (
    <div className='banner_container'>
        <img src={BannerImg} alt="banniere page d'accueil" />
        <div className="banner_text">
            Chez vous, partout et ailleurs
        </div>      
    </div>
  )
}
