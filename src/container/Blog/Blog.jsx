import React from 'react'

import Work from '../Work/Work'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'

function Blog() {
  return (
    <>
      <NavBar />
      <div className='header'>
        <div className="header__heading">
          <h2>Blog</h2>
        </div>
        <div className="header__intro">
          <div className="header__Intro-subheading">
              <p>I create and maintain modern websites and applications. I solve all your business problems.
              </p>
          </div>
          <div className="header__Intro-projects">
              <p>12</p>
              <h3>SUCCESSFULLY COMPLETED PROJECTS</h3>
          </div>
          <div className="work__header-Intro_years">
              <p>3+</p>
              <h3>YEARS OF EXPERIENCE</h3>
          </div>
        </div>
        <div className="header__categories">
            <button>All</button>
            <button>LandingPage</button>
            <button>Shopify</button>
            <button>Wordpress</button>
            <button>Figma</button>
            <button>Dashboard</button>
            <button>Startup</button>
            <button>Corporate</button>
            <button>Webflow</button>
            <button>Ecommerce</button>
        </div>
      </div>
      <Work />
      <div className="footer__wrapper">
        <Footer />
      </div>
    </>
  )
}

export default Blog