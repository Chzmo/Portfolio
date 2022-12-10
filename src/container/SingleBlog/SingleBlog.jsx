import React from 'react'

import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

import './SingleBlog.css'

function SingleBlog() {
  return (
    <>
      <NavBar />
      <div className='singleBlog'>
        <div className="singleBlog__header">
          <h2>Shopify Website Design and Development for Organic Products</h2>
          <div className="singleBlog__header-related">
            <button>Landing Page</button>
            <button>Shopify</button>
            <button>Wordpress</button>
          </div>
        </div>
        <p>Home {'/'} Blog {'/'} Post</p>
        <div className="singleBlog__main">
          <div className= "singleBlog__main-img">
            {/* background image */}
          </div>
          <div className="singleBlog__main">
            <div className="socials">
              <div className="socials__date"><p>2 years ago</p></div>
              <div className="socials__links">
                <div className="socials__links-like">1K</div>
                <div className="socials__links-comment">38</div>
                <div className="socials__links-share">5</div>
              </div>
            </div>
            <div className="blog">
              <div className="blog__post"></div>
              <div className="blog__comments"></div>
            </div>
            <div className="related">
              <h2>Related Blog Posts</h2>
              <div className="related__img"></div>
              <div className="related__title"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__wrapper">
        <Footer />
      </div>
    </>
  )
}

export default SingleBlog