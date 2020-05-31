import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

// import 'bootstrap/dist/css/bootstrap.min.css';

import '../../css/bootstrap.css'
import './carousel.scss'


import { Carousel } from 'react-bootstrap'
import CarouselInfo from './carousel-info/CarouselInfo'


import BackGroudComponent from '../backGroundComponent/BackgroundComponent'


const query = graphql`
  query {
    images:allFile(filter: {relativeDirectory: {eq: "fondos"}}) {
      edges {
        node {
          childImageSharp {
            fluid (quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`


const CarouselComponent = () => {
  const data = useStaticQuery(query)
  const images = data.images.edges
  return (
    <div className="import-bootstrap main-carousel">
      <Carousel >
      {images.map((image, index) => {
        return (
          <Carousel.Item>
            <div key={index}>
              <BackGroudComponent clase="test-backCarousel" image={image.node.childImageSharp.fluid}>
                <CarouselInfo titulo="TITULO" descripcion="lorem ipsun lkajslfajsflñ añlskjflñask alñskfj  "/>
              </BackGroudComponent>
            </div>
          </Carousel.Item>
        )
      })}
      </Carousel>
    </div>
  )
}



export default CarouselComponent
