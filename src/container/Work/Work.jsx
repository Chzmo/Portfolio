import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import image1 from '../../assets/media/thumbs_freebie-gpt-3-landing-page.jpg'

import './Work.css'
function Work() {

  return (
    <div className='work'>
      {/* <NavBar /> */}
      <div className="work__portfolio">
        <div className="work__portfolio-item">
          <a href='' className="work__portfolio-item_card">
            <img src={image1} alt="" />
          </a>
        </div>
        <div className="work__portfolio-item">
          <a href='' className="work__portfolio-item_card">
            <img src={image1} alt="" />
          </a>
        </div>
        <div className="work__portfolio-item">
          <a href='' className="work__portfolio-item_card">
            <img src={image1} alt="" />
          </a>
        </div>
        <div className="work__portfolio-item">
          <a href='' className="work__portfolio-item_card">
            <img src={image1} alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Work