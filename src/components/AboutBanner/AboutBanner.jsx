import React from 'react'
import BannerImg from '../../assets/images/fondAbout.jpg'


export default function AboutBanner() {
  return (
    <div className='AboutBannerWrapper'>
        <figure className='AboutBanner__fig'>
        <img className='bannerWrapper__fig__img' src={BannerImg} alt="banniere page d'accueil" /> 
        </figure>      
    </div>
  )
}
