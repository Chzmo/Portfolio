import React from 'react'

import {CiHeart } from 'react-icons/ci'
import {BsFillHeartFill} from 'react-icons/bs'
import {HiOutlineShare} from 'react-icons/hi'
import {BiMessageRoundedDetail} from 'react-icons/bi'

import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

import profileImg from '../../assets/media/zaliro_p.png';
import image1 from '../../assets/media/thumbs_freebie-gpt-3-landing-page.jpg';
import image2 from '../../assets/media/thumbs_freebie-website-landing-page-design.jpg';
import image3 from '../../assets/media/thumbs_freelancer-landing-page-minimal-design-figma-freebie.jpg';
import image4 from '../../assets/media/thumbs_real-estate-landing-page-ui-freebie.jpg';
import './SingleBlog.css'

const blogs = [
  {
    image:image1,
  },
  {
    image:image2,
  },
  {
    image:image3,
  },
  {
    image:image4,
  }
]

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
          <div className="singleBlog__blog">
            <div className="socials">
              <div className="socials__date"><p>2 years ago</p></div>
              <div className="socials__links">
                <div className="socials__links-like"><a href=""><CiHeart className="social-icon"/> <span>30K</span></a></div>
                <div className="socials__links-comment"><a href=""><BiMessageRoundedDetail className="social-icon"/> <span>390</span></a></div>
                <div className="socials__links-share"><a href=""><HiOutlineShare className="social-icon"/> <span>Share</span></a></div>
              </div>
            </div>
            <div className="blog">
              <div className="blog__post">
                <div className="blog__post-profile">
                  <div className="blog__post-profile_img">
                    <a href="/"><img src={profileImg} height={45} alt="Chisomo-Zaliro-Moyo" /></a>
                  </div>
                  <div className="blog__post-profile_info">
                    <h2>Chisomo Zaliro Moyo</h2>
                    <a href="/">Author</a>
                  </div>
                </div>
                <div className="blog__post-content">
                  <summary>ShareMe is a photo sharing web application, inspired by Pinterest. ShareMe 
                    is a social media platform that allows users to save and 
                    share images that they find online.
                    Users can create boards to organize their pins and follow 
                    other users to discover new content. ShareMe is often used 
                    as a source of inspiration for various activities, including 
                    crafting, DIY projects, fashion, home decor, and more.
                  </summary>
                  <div className="blog__post-content_technologies">
                    <h3>Technologies used</h3>
                    <div className="blog__post-content_technologies-items">
                      <ul>
                        <li>ReactJs</li>
                        <li>Oauth2</li>
                        <li>Mansonry-Layout</li>
                        <li>Tailwind Css</li>
                        <li>Sanity io</li>
                        <li>jwt-decode</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="related">
              <h2>Related Blog Posts</h2>
                { blogs.map((blog, key) =>{
                  return (
                    <div className="related__post">
                      <a key={key} className="related__post-img" href="/Blog/Single">
                        <img src={blog.image} alt="" />
                      </a>
                      <div className="related__post-title"><h3>Shopify Website Design and Development for Organic Products</h3></div>
                      <div className="related__post-socials">
                        <div className="related__post-socials_date"><p>2 years ago</p></div>
                        <div className="related__post-socials_links">
                          <div className="socials__links-like"><a href="/"><BsFillHeartFill className="social-icon"/> <span> 30K</span></a></div>
                        </div>
                      </div>
                    </div>
                  );
                })
                }
              </div>
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