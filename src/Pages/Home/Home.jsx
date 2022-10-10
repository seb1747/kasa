import React from 'react'
import BannerDesk from '../../assets/images/bannerDesk.jpg'
import Card from '../../components/Card/Card';
import Data from '../../data.json'
import { Link } from 'react-router-dom';
import './Home.css'
import BannerResponsive from '../../assets/images/bannerResp.jpg'



export default function Home() {
  
  return (
    <div>
     
      <main>
        <div id="title">
          <img src={BannerDesk} alt="banniere paysage" id="banner__desktop" />
          <img src={BannerResponsive} alt="banniere paysage" id="banner__responsive" />
          <div id="title__background"></div>
          <h1 id="title__banner">Chez vous, partout et ailleurs</h1>
        </div>

        <div id="location">
          {Data.map((card) => (
           
            <Link className='location__link' key={`${card.id}`} to={`/Location/${card.id}`}>
              <Card key={`${card.id}`} cover = {card.cover} title = {card.title} />
            </Link>
          ))} 
          </div>
      </main>
     
    </div>
  )
}
