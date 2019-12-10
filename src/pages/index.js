import React from 'react'
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

        <Banner img={banner} title="Podium Ice Skate" />

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
          <Services />
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
