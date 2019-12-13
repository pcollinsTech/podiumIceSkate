import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import coreography from '../assets/images/coreography.jpg'
import olaf from '../assets/images/olaf.jpeg'
import off_ice from '../assets/images/off_ice.png'

const Services = () => {
  return (
    <Fragment>
      <div id="services">
        <h2 className="black mb-5">Services</h2>
        <div className="row">
          <div className="container services__container">
            <div className="col-sm-4">
              <div className="service">
                <img className="service_image" src={olaf} alt="Social Media" />
                <h3 className="my-3">Private Lesson</h3>
                <p>
                  A private lesson with a qualified coach is a great way to get
                  super one to one information specific to your skating needs.
                  Average lesson cost £10 and will take 15min. The price of a
                  lesson does not include admission to the ice rink
                </p>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="service">
                <img
                  className="service_image"
                  src={off_ice}
                  alt="Branding &amp; Identity Design"
                />
                <h3 className="mt-3">Off Ice Training</h3>
                <p>
                  Skating requires so many different skills. This can often
                  become daunting. Many people are surprised how much work is
                  required off the ice. We teach our skaters how to warm up/cool
                  down safely, stretching, strength training and jump related
                  exercises all focussing on timing coordination and technique.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="service">
                <img
                  className="service_image"
                  src={coreography}
                  alt="Branding &amp; Identity Design"
                />
                <h3 className="mt-3">Coreography</h3>
                <p>
                  A classical dance background and many years of competitive and
                  show skating that given us a wide experience of choreography.
                  We can incorporate many different styles on to the ice. We
                  have worked with Cindy Mundow and received master classes from
                  some of the worlds leading choreographers including Misha Ge
                  and Giuseppe Arena.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        <button>
          <Link to="/contact">Contact us for more information</Link>
        </button>
      </div>
    </Fragment>
  )
}

export default Services
