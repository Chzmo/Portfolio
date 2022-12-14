import React from 'react'

import {CiHeart } from 'react-icons/ci'
import {BsFillHeartFill, BsReplyAll} from 'react-icons/bs'
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
import { Link } from 'react-router-dom'

const blogs = [{ image:image1 }, { image:image2,}, {image:image3}, {image:image4}]

function Comment(){
  return (
    <>
      <div className="comments__main">
        <div className="comments__main-profile">
          <img src={profileImg} alt="profile" />
        </div>
        <div className="comments__main-content">
          <div className="comments__main-content_top">
            <h3>Chisomo Zaliro Moyo</h3> <p>3 Months ago</p>
          </div>
          <div className="comments__main-content_message">
            <p>A good web design is one that is user-friendly, visually appealing, 
              and easy to navigate. 
            </p>
          </div>
          <div className="comments__main-content_bottom">
            <div className="content_bottom-social">
              <button><CiHeart className="social-icon"/><span>30K</span></button>
            </div>
            <div className="content_bottom-reply"><button><BsReplyAll className="social-icon"/><span>Reply</span></button></div>
          </div>
        </div>
      </div>
    </>
  );
}

function Reply(){
  return (
    <>
      <div className="comments__main">
        <div className="comments__main-profile">
          <img src={profileImg} alt="profile" />
        </div>
        <div className="form">
          <textarea name="reply" cols="80" rows="5">

          </textarea>
          <button>Comment</button>
        </div>
      </div>
    </>
  );
}


function SingleBlog() {
  return (
    <>
      <NavBar />
      <div className='singleBlog'>
        <div className="singleBlog__header">
          <h2>Shopify Website Design and Development for Organic Products</h2>
          <div className="singleBlog__header-related">
            <button>LandingPage</button>
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
                    <Link to="/">Author</Link>
                  </div>
                </div>
                <div className="blog__post-content">
                  <summary> <strong>ShareMe</strong>  is a photo sharing web application, inspired by Pinterest. ShareMe 
                    is a social media platform that allows users to save and 
                    share images that they find online.
                    Users can create boards to organize their pins and follow 
                    other users to discover new content. ShareMe is often used 
                    as a source of inspiration for various activities, including 
                    crafting, DIY projects, fashion, home decor, and more.
                  </summary>
                  <div className="blog__post-content_technologies">
                    <h2>Technologies used</h2>
                    <div className="blog__post-content_technologies-items">
                      <ul>
                        <li>ReactJs</li>
                        <li>Google oauth2</li>
                        <li>Mansonry-Layout</li>
                        <li>Tailwind CSS</li>
                        <li>Sanity io</li>
                        <li>jwt-decode</li>
                        <li>uuId</li>
                        <li>Custom CSS</li>
                        <li>Sanity io</li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog__post-content_overview">
                    <h2>Overview</h2>
                    <hr />
                    <h3>Users should be able to</h3>
                    <div className="blog__post-content_overview-items">
                      <p>01. View the application on different devices.</p>
                      <p>02. Login using their Email.</p>
                      <p>03. View different pins/images posted by other users.</p>
                      <p>04. View specific pins selected by the user with related pins if exits.</p>
                      <p>05. comment on specific pins.</p>
                      <p>06. Create a Pin by clicking a on a plus icon on top right.</p>
                      <p>07. Delete a Pin by clicking a on delete icon.</p>
                      <p>08. Delete User profile</p>
                      <p>09. Logout from the system</p>
                    </div>
                    <h3>Continued development</h3>
                    <div>
                      <p>Still working on the design and adding more features!!!!</p>
                    </div>
                  </div>
                  <div className="comments">
                    <h2>Comments</h2>
                    <Comment />
                    <Comment />
                    <Reply />
                  </div>
                </div>
              </div>
              <div className="related">
              <h2>Related Blog Posts</h2>
                { blogs.map((blog, key) =>{
                  return (
                    <div key={key} className="related__post">
                      <a  className="related__post-img" href="/Blog/Single">
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