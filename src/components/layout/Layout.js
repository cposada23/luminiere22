import React from 'react'
import TopBar from './topBar/TopBar'
import LogoArea from './logoArea/LogoArea'
import Menu from './menu/Menu'
import Footer from './footer/Footer'

import './layout.scss'

const Layout = ({children}) => {
  return (
    <div className="layout">
      <TopBar text={"Promocion de envios gratis ..............."}/>
      
      <div className="main-content">
        <LogoArea/>
        <Menu />
        {children}
        <Footer /> 
      </div>
    </div>
  )
}

export default Layout
