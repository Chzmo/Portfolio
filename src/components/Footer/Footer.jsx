import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HashLink } from 'react-router-hash-link';

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
          <h3>Navigation</h3>
          <nav>
            <ul role="list" className="footer__top-nav-list">
              <li className="footer__top-nav-list-item">
                <HashLink to="/#" className="footer__top-nav-link" smooth>Home</HashLink>
              </li>
              <li className="footer__top-nav-list-item">
                <HashLink to="/#Testimonials" className="footer__top-nav-link" smooth>Testimonials</HashLink>
              </li>
              <li className="footer__top-nav-list-item">
                <HashLink to="/Work#" className="footer__top-nav-link" smooth>Recent Work</HashLink>
              </li>
              <li className="footer__top-nav-list-item">
                <HashLink to="/#About" className="footer__top-nav-link" smooth>About Me</HashLink>
              </li>
              <li className="footer__top-nav-list-item">
                <HashLink to="/Contact#" className="footer__top-nav-link" smooth>Contact</HashLink>
              </li>
              <li className="footer__top-nav-list-item">
                <HashLink to="/Contact#" className="footer__top-nav-link" smooth>FAQs</HashLink>
              </li>
          </ul>
          </nav>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-copyright">
          <p>©2022 CHZMO. All Rights Reserved</p>
        </div>
        <div className="footer__bottom-backtotop">
          <a href="#">Back to Top</a>
        </div>
      </div>
    </div>
  )
}

export default Footer