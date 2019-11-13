import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import MeetTheTeam from '../components/MeetTheTeam'
import BannerContact from '../components/BannerContact'
import banner from '../assets/images/iceRinkBoot.jpg'
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
              <p>
                We are Podium Ice Skate... <br /> <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                unde nesciunt quam delectus numquam nam ducimus facilis vel,
                mollitia, culpa aliquid. Recusandae reprehenderit nihil,
                voluptatum exercitationem vero ipsum natus animi.
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit tempore necessitatibus rem hic aspernatur repellat,
                voluptas ratione eaque facilis possimus sapiente quas officiis
                unde molestias saepe dolor sunt culpa praesentium?
              </p>
            </div>
          </div>

          <MeetTheTeam />
          <BannerContact />
        </div>
      </Layout>
    )
  }
}

export default AboutUs
