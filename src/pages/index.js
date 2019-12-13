import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Services from '../components/Services'
import banner from '../assets/images/iceRinkBoot.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Podium Ice Skate"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>

        <Banner
          img={this.props.data.image1.childImageSharp.fluid}
          title="Podium Ice Skate"
        />

        <div id="main">
          <div className="row home_about">
            <div className="container">
              <p className="mt-5">
                Podium Ice Skating has 50 years combined skating experience.
                <br />
                Work with our fully qualified team to Learn, Practice, Improve
                Skills and feel better about yourself.
              </p>
              <p className="mt-5">
                Our instructors have competed at the highest standard. They
                understand the discipline/hard work needed for success they are
                committed and inspirational.
              </p>
            </div>
          </div>
          <Services
            privateLesson={this.props.data.serviceImage1.childImageSharp.fluid}
            offIce={this.props.data.serviceImage2.childImageSharp.fluid}
            coreography={this.props.data.serviceImage3.childImageSharp.fluid}
          />
        </div>
      </Layout>
    )
  }
}

export default HomeIndex

export const serviceImage = graphql`
  fragment serviceImage on File {
    childImageSharp {
      fluid(maxWidth: 340, maxHeight: 340) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const indexImage = graphql`
  fragment indexImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const query = graphql`
  query {
    image1: file(relativePath: { eq: "iceRinkBoot.jpg" }) {
      ...indexImage
    }
    serviceImage1: file(relativePath: { eq: "olaf.jpeg" }) {
      ...serviceImage
    }
    serviceImage2: file(relativePath: { eq: "off_ice.png" }) {
      ...serviceImage
    }
    serviceImage3: file(relativePath: { eq: "coreography.jpg" }) {
      ...serviceImage
    }
  }
`
