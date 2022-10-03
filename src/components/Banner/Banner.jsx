import React from 'react'
import BannerImg from '../../assets/images/IMG.jpg'
import './Banner.css'


export default function Banner() {
  return (
    <div className='bannerWrapper'>
      <figure className="bannerWrapper__fig">
        <img className='bannerWrapper__fig__img' src={BannerImg} alt="banniere page d'accueil" />
      
        <span className="banner_text">
            Chez vous, partout et ailleurs
        </span> 
      </figure>    
    </div>
  )
}
