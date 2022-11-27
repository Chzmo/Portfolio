import React from 'react'

import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer__top">
        <div className="footer__top-left">
          <div className="footer__top-left_chzmo">
            <p>CHZMO</p>
          </div>
          <div className="footer__top-left_motive">
            <div className="footer__top-left_motive-impression">
              <p>You only have one chance to make a first impression.</p>
            </div>
            <div className="footer__top-left_motive-amazing">
              <p>Let’s make it an amazing one.</p>
            </div>
          </div>
        </div>
        <div className="footer__top-nav">
          <nav>
            <ul role="list" className="footer__top-nav-list">
              <li className="footer__top-nav-list-item">
                <a href="#Home" className="footer__top-nav-link">Home</a>
              </li>
              <li className="footer__top-nav-list-item">
                <a href="#Services" className="footer__top-nav-link">Services</a>
              </li>
              <li className="footer__top-nav-list-item">
                <a href="#" className="footer__top-nav-link">About Me</a>
              </li>
              <li className="footer__top-nav-list-item">
                <a href="#Testimonials" className="footer__top-nav-link">Testimonials</a>
              </li>
              <li className="footer__top-nav-list-item">
                <a href="#Recent-Work" className="footer__top-nav-link">Recent Work</a>
              </li>
              <li className="footer__top-nav-list-item">
                <a href="#FAQs" className="footer__top-nav-link">FAQs</a>
                <a href="#Pricing" className="footer__top-nav-link">Contact</a>
              </li>
          </ul>
          </nav>
        </div>
      </div>
      <div className="footer__bottom">
        fsdfsdfs
      </div>
    </div>
  )
}

export default Footer