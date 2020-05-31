import React from 'react'
import Layout from '../components/layout/Layout'
import CarouselComponent from '../components/carousel/CarouselComponent'

import '../css/main.scss'

const index = () => {
  return (
    <Layout>
      <CarouselComponent />
      <h2>Hola contenido</h2>
    </Layout>
  )
}

export default index
