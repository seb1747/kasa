import React from 'react'

import './Info.css'


export default function InfoLocation ({ title , location, tags , host, rating}) {
  
    const stars = [1,2,3,4,5]

  return (
    <div id='info'>
        <div id = "info__wrapper">
            <h1 id="title__info">{title}</h1>
            <h2 id="location__info">{location}</h2>
            <div id = "tags">
                {tags.map((tag)=> {
                    return (
                        <span className="tag" key={`${tag}`}>
                            {tag}
                        </span>
                    );
                })}
            </div>
        </div>
        <div id="host">
            <div id="host__tag">
                <p id="host__tag__name">{host.name}</p>
                <img src={host.picture} alt="{host.name}" id="host__tag__image" />
            </div>
                    <div id="stars__range">
                        {stars.map((starRange)=> 
                        rating >= starRange ? (
                            <svg
                            key = {starRange.toString()}
                            className = "star"
                            width= "30" height= "30"viewBox="0 0 30 30" fill="#FF6060" xmlns="http://www.w3.org/2000/svg">
                            <path 
                            d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" />
                            </svg>
                        ) : (
                            <svg 
                            key={starRange.toString()}
                            className = "star"
                            width= "30" height= "30" viewBox="0 0 30 30" fill="#e3e3e3" xmlns="http://www.w3.org/2000/svg">
                            <path 
                            d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"/>
                            </svg>

                        )
                        )}

                    </div>
            
        </div>            
    </div>
  )
}
