import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import MeetTheTeam from '../components/MeetTheTeam'
import BannerContact from '../components/BannerContact'
import banner from '../assets/images/iceRinkBoot.jpg'
import bannerTogegther from '../assets/images/bannerTogegther.jpg'

class AboutUs extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Podium Skate | About Us"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>

        <Banner img={banner} title="We Are Podium Ice Skate" />

        <div id="main">
          <div className="row home_about">
            <div className="container mobile">
              {/* <h3 className="text-center mb-5" style={{ color: 'black' }}>
                We are Podium Ice Skate
              </h3> */}
              {/* <img src={outsideTogether} alt="" /> */}
            </div>
          </div>

          <MeetTheTeam />
          <div className="container mb-5">
            <div className="row text-center mb-5">
              <img src={bannerTogegther} alt="" />
            </div>
          </div>
          <BannerContact />
        </div>
      </Layout>
    )
  }
}

export default AboutUs
