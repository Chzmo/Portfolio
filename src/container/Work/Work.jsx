import React, { useEffect, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { useParams } from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import image1 from '../../assets/media/thumbs_freebie-gpt-3-landing-page.jpg'
import image2 from '../../assets/media/thumbs_freebie-website-landing-page-design.jpg'

import './Work.css'
function Work() {
  const [currntUrl, setCurrntUrl] = useState(null)

  useEffect(() => {
    setCurrntUrl(window.location.href)
  }, [])
  
  return (
    <>
      {currntUrl && currntUrl === "http://localhost:5173/Work" &&(
        <div><NavBar /></div>
      )}
      <div className='work '>

        <div className="work__portfolio container">
          <div className="work__portfolio-item">
            <a href='' className="work__portfolio-item_img">
              <img src={image2} alt="" />
            </a>
            <div className="work__portfolio-item_links">
              <a href="https://github.com/chzmo">GitHub</a>
              <a href="https://github.com/chzmo">View Site</a>
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

          <div className="work__portfolio-item">
            <a href='' className="work__portfolio-item_img">
              <img src={image1} alt="" />
            </a>
            <div className="work__portfolio-item_links">
              <a href="https://github.com/chzmo">GitHub</a>
              <a href="https://github.com/chzmo">View Site</a>
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

          <div className="work__portfolio-item">
            <a href='' className="work__portfolio-item_img">
              <img src={image1} alt="" />
            </a>
            <div className="work__portfolio-item_links">
              <a href="https://github.com/chzmo">GitHub</a>
              <a href="https://github.com/chzmo">View Site</a>
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
          
          <div className="work__portfolio-item">
            <a href='' className="work__portfolio-item_img">
              <img src={image2} alt="" />
            </a>
            <div className="work__portfolio-item_links">
              <a href="https://github.com/chzmo">GitHub</a>
              <a href="https://github.com/chzmo">View Site</a>
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
        </div>
          <a href="#Contact" className='work__cta'><span>View all Work</span> <FiArrowUpRight /></a>
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