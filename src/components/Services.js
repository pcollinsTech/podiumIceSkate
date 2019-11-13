import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import oneOnOne from '../assets/images/oneOnOne.jpg'
import coreography from '../assets/images/coreography.jpg'
import gorup from '../assets/images/gorup.jpg'

const Services = () => {
  return (
    <Fragment>
      <div id="services">
        <h2 className="black mb-5">Services</h2>
        <div className="row">
          <div className="container services__container">
            <div className="col-sm-4">
              <div className="service">
                <img
                  className="service_image"
                  src={oneOnOne}
                  alt="Social Media"
                />
                <h3 className="my-3">Service One</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                  adipisci ad illo corrupti officia earum voluptatibus voluptas
                  temporibus. Perspiciatis, quis quidem! Eos ea facere id
                  excepturi labore possimus nisi nesciunt.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="service">
                <img
                  className="service_image"
                  src={coreography}
                  alt="WebDesing"
                />
                <h3 className="mt-3">Service Two</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laudantium nam ratione voluptas tempore dolorem itaque
                  possimus? Mollitia quas, illum harum saepe ad eligendi, omnis
                  consequatur non minima impedit qui minus?
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="service">
                <img
                  className="service_image"
                  src={gorup}
                  alt="Branding &amp; Identity Design"
                />
                <h3 className="mt-3">Service Three</h3>
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
