import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

import { client } from '../../client';
import { postQuery } from '../../utils/query';
import { urlFor } from '../../client';
import Spinner from '../../components/Spinner/Spinner';

import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import image1 from '../../assets/media/thumbs_freebie-gpt-3-landing-page.jpg'
import image2 from '../../assets/media/thumbs_freebie-website-landing-page-design.jpg'
import image3 from '../../assets/media/thumbs_freelancer-landing-page-minimal-design-figma-freebie.jpg'
import image4 from '../../assets/media/thumbs_real-estate-landing-page-ui-freebie.jpg'

import './Work.css'

const websites = [
  {
    image:image1,
    url:"/Work/single",
    gitHub:"https://www.github.com/Chzmo"
  },
  {
    image:image2,
    url:"/blog/single",
    gitHub:"https://www.github.com/Chzmo"
  },
  {
    image:image3,
    url:"/blog/single",
    gitHub:"https://www.github.com/Chzmo"
  },
  {
    image:image4,
    url:"/blog/single",
    gitHub:"https://www.github.com/Chzmo"
  }
]

function Heading(){
  return (
    <>
      <h2 className='heading'>Work</h2>
      <p className='paragraph'>Award-winning designs for real clients.</p>
    </>
  )
}

function Work() {
  const [currntUrl, setCurrntUrl] = useState(null)

  const [postData, setPostData] = useState(null);
  const [loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
    const query = postQuery;
    client.fetch(query)
        .then((data)=> {
          setPostData(data)
          // setLoading(false)
        }) 
  }, [])

  useEffect(() => {
    setCurrntUrl(window.location.href)
  }, [])
  
  return (
    <>
      {(currntUrl === "http://localhost:5173/Work" || currntUrl === "https://inquisitive-croissant-516f39.netlify.app/Work") &&(
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
        {(currntUrl === "http://localhost:5173/" || currntUrl === "https://inquisitive-croissant-516f39.netlify.app/" ||
          currntUrl === "http://localhost:5173/#" || currntUrl === "https://inquisitive-croissant-516f39.netlify.app/#" ||
          currntUrl === "http://localhost:5173/#about" || currntUrl === "https://inquisitive-croissant-516f39.netlify.app/#about" ||
          currntUrl === "http://localhost:5173/#Testimonials" || currntUrl === "https://inquisitive-croissant-516f39.netlify.app/#Testimonials"
        )&&(
          <Heading/>
        )}
        <div className="work__portfolio container">
          {loading ? < Spinner /> : postData?.map((post, key) =>{
            return (
              <div key={key} className="work__portfolio-item">
                <a href={ 'Work/' + post?._id} className="work__portfolio-item_img">
                  <img src={ urlFor(post?.image) } alt="" />
                </a>
                <div className="work__portfolio-item_links">
                  <a href={post?.gitHubUrl}>GitHub</a>
                  <a href={post?.liveUrl}>View Site</a>
                </div>
                <div className="work__portfolio-item-heading">
                  <h3>{post?.title}</h3>
                  <hr />
                </div>
                <div className="work__portfolio-item_details">
                  <div className="work__portfolio-item_details-time">
                      <p>COMPLETION TIME</p>          
                      <p>{post?.completionTime} WEEKS</p>          
                  </div>
                  <div className="work__portfolio-item_details-charges">
                    <p>FEE  CHARGED</p>
                    <p>$0.00</p>  
                  </div>
                  <Link href='' className="work__portfolio-item_details-view">
                    <p>VIEW</p>          
                    <p>FULL DETAILS</p>               
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        {(currntUrl?.toLowerCase() === "http://localhost:5173/work" | 
          currntUrl?.toLowerCase() === "http://localhost:5173/blog" |
          currntUrl?.toLowerCase() === "https://inquisitive-croissant-516f39.netlify.app/work" |
          currntUrl?.toLowerCase() === "http://localhost:5173/work/single")?(<></>):(
          <a href="/Work" className='work__cta'><span>View all Work</span> <FiArrowUpRight /></a>
        )}
      </div>
      {(currntUrl === "http://localhost:5173/Work" | currntUrl === "https://inquisitive-croissant-516f39.netlify.app/Work")?(
        <div className="footer__wrapper">
          <Footer />
        </div>
      ):(
        <></>
      )}
    </>
  )
}

export default Work