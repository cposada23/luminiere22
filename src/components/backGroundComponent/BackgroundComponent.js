import React from 'react'

import BackgroundImage from 'gatsby-background-image'

const backgroundComponent = ({image, clase, children}) => {

  return (
    <BackgroundImage
      Tag="section"
      className={clase}
      fluid={image}
      // backgroundColor={`#040e18`}
    >
      <div>
        {children}
      </div>
    </BackgroundImage>
  )
}

export default backgroundComponent
