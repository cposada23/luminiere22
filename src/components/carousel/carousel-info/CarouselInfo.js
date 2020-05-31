import React from 'react'

import './caroulselInfo.scss'

const CarouselInfo = ({titulo, descripcion}) => {
  return (
    <div className="carousel-info">
      <div className="carousel-description">
        <h1 className="carousel-title">{titulo}</h1>
        <p>{descripcion}</p>
      </div>
    </div>
  )
}

export default CarouselInfo
