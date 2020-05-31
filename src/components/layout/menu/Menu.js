import React from 'react'

import './menu.scss'

const Menu = () => {
  return (
    <nav>
      <div className="barraMenu">
        <div></div>
        <div id="menu">
          <div className="menu-item active">
            Nosotros
          </div>
          <div className="menu-item">
            Velas
          </div>
          <div className="menu-item">
            Complementos
          </div>
          <div className="menu-item">
            Blog
          </div>
          <div className="menu-item">
            Tienda fisica
          </div>
          <div className="menu-item">
            Contacto
          </div>
        </div>  
        <div></div>
      </div>
      
    </nav>
  )
}

export default Menu
