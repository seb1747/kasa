import React from 'react'
import data from '../../data.json'
import './Card.css'
import {Link, Outlet} from 'react-router-dom'

export default function Card() {
  return (
    <div className='card_container' >
      <Link to= '/location/:id'></Link>
      {
        data && data.map(data =>{
          return (
            <div className="card_body" key={data.id} >
              <div className="card_img">
                <img src={data.cover} alt="" />
               
              <span className="card_title">{data.title}</span>
              </div>
              <Outlet/>
            </div>
          )
        })
      }
    </div>
  )
}
