import React from 'react'
import Img from 'gatsby-image'

const Banner = ({ img, title }) => (
  <div id="blog_banner" className="blog_major">
    <Img fluid={img} loading="lazy" style={{ position: 'static' }} />
    <div className="inner">
      <header>
        <h1>{title}</h1>
      </header>
    </div>
  </div>
)

export default Banner
