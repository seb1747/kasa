import React from 'react'
import BannerImg from '../../assets/images/fondAbout.jpg'
import './About.css'


export default function AboutBanner() {
  return (
    <div className='About__Banner__Wrapper'>
        <figure className='AboutBanner__fig'>
        <img className='banner__Wrapper__fig__img' src={BannerImg} alt="banniere page d'accueil" /> 
        </figure>      
    </div>
  )
}
