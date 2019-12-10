import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import oneOnOne from '../assets/images/oneOnOne.jpg'
import coreography from '../assets/images/coreography.jpg'
import gorup from '../assets/images/gorup.jpg'
import olaf from '../assets/images/olaf.jpeg'
import off_ice from '../assets/images/off_ice.jpg'

const Services = () => {
  return (
    <Fragment>
      <div id="services">
        <h2 className="black mb-5">Services</h2>
        <div className="row">
          <div className="container services__container">
            <div className="col-sm-6">
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
            <div className="col-sm-6">
              <div className="service">
                <img className="service_image" src={gorup} alt="WebDesing" />
                <h3 className="mt-3">Group Lessons</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laudantium nam ratione voluptas tempore dolorem itaque
                  possimus? Mollitia quas, illum harum saepe ad eligendi, omnis
                  consequatur non minima impedit qui minus?
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="service">
                <img
                  className="service_image"
                  src={off_ice}
                  alt="Branding &amp; Identity Design"
                />
                <h3 className="mt-3">Off Ice Training</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  quos maiores labore nihil illo ab ipsa, dicta sapiente
                  quisquam illum rerum cupiditate inventore sed error quas! Quis
                  animi totam repellat.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="service">
                <img
                  className="service_image"
                  src={coreography}
                  alt="Branding &amp; Identity Design"
                />
                <h3 className="mt-3">Coreography</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  quos maiores labore nihil illo ab ipsa, dicta sapiente
                  quisquam illum rerum cupiditate inventore sed error quas! Quis
                  animi totam repellat.
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
