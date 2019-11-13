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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                quibusdam sapiente tenetur provident, exercitationem enim quam
                iusto? Exercitationem tempora quae similique porro cum voluptas
                asperiores eius, animi cumque ipsum nulla.
              </p>
              <p className="mobile">
                “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum quibusdam sapiente tenetur provident, exercitationem
                enim quam iusto? Exercitationem tempora quae similique porro cum
                voluptas asperiores eius, animi cumque ipsum nulla."
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
