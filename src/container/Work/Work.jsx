import React, { useEffect, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { useParams } from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import {Intro} from '../../components/Hero/Hero';
import image1 from '../../assets/media/thumbs_freebie-gpt-3-landing-page.jpg'
import image2 from '../../assets/media/thumbs_freebie-website-landing-page-design.jpg'
import image3 from '../../assets/media/thumbs_freelancer-landing-page-minimal-design-figma-freebie.jpg'
import image4 from '../../assets/media/thumbs_real-estate-landing-page-ui-freebie.jpg'


import './Work.css'

const websites = [
  {
    image:image1,
    url:"/work/single",
    gitHub:"https://www.github.com/Chzmo"
  },
  {
    image:image2,
    url:"/work/single",
    gitHub:"https://www.github.com/Chzmo"
  },
  {
    image:image3,
    url:"/work/single",
    gitHub:"https://www.github.com/Chzmo"
  },
  {
    image:image4,
    url:"/work/single",
    gitHub:"https://www.github.com/Chzmo"
  }
]


function Work() {
  const [currntUrl, setCurrntUrl] = useState(null)

  useEffect(() => {
    setCurrntUrl(window.location.href)
  }, [])
  
  return (
    <>
      {(currntUrl && currntUrl === "http://localhost:5173/Work" || currntUrl === "http://chzmo.com/Work") &&(
        <div >
          <NavBar />
          <div className='header'>
            <div className="header__heading">
              <h2>Portfolio</h2>
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
        </div>
      )}
      <div className='work '>

        <div className="work__portfolio container">
          { websites.map((website, key)=>{
            return (
              <div className="work__portfolio-item">
                <a href={website.url} className="work__portfolio-item_img">
                  <img src={website.image} alt="" />
                </a>
                <div className="work__portfolio-item_links">
                  <a href={website.gitHub}>GitHub</a>
                  <a href={website.url}>View Site</a>
                </div>
                <div className="work__portfolio-item-heading">
                  <h3>Landing Page Design for Bee Honey</h3>
                </div>
                <div className="work__portfolio-item_details">
                  <div className="work__portfolio-item_details-time">
                      <p>COMPLETION TIME</p>          
                      <p>10 WEEKS</p>          
                  </div>
                  <div className="work__portfolio-item_details-charges">
                    <p>FEE  CHARGED</p>          
                    <p>$0.00</p>  
                  </div>
                  <a href='' className="work__portfolio-item_details-view">
                    <p>VIEW</p>          
                    <p>FULL DETAILS</p>               
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        {(currntUrl !== "http://localhost:5173/Work" && currntUrl !== "http://chzmo.com/Work") &&(
          <a href="#Contact" className='work__cta'><span>View all Work</span> <FiArrowUpRight /></a>
        )}
      </div>
      {currntUrl && currntUrl === "http://localhost:5173/Work" &&(
        <div className="footer__wrapper">
          <Footer />
        </div>
      )}
    </>
  )
}

export default Work