import React from 'react'

import './Mission.css'
import image1 from '../../assets/media/1.png'

function Mission() {
  return (
    <div className="container">
      <div className='mission'>
        <div className="mission__top">
          <div className="mission__top-statement">
            <p>My mission is to design the best websites & dashboards around</p>
          </div>
          <div className="mission__top-img">
            <img src={image1} alt="" />
          </div>
        </div>
        <div className="mission__bottom">
          <p>01. Dashboard UI Design</p>
          <p>02. Shopify Store Design</p>
          <p>03. Shopify Store Development</p>
          <p>04. Website Design</p>
          <p>05. Webflow</p>
          <p>06. Mobile App Design</p>
        </div>
      </div>
    </div>
  )
}

export default Mission