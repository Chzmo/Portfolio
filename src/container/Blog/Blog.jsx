import React, { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

import { blogQuery} from '../../utils/query'
import { client, urlFor } from '../../client'

import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import Spinner from '../../components/Spinner/Spinner'
import './Blog.css'


function BlogPosts(props){
  
  const [loading, setLoading] = useState(false);
  const [blogData, setBlogData] = useState(null)

  useEffect(() => {
    setLoading(true);
    const query = props?.query;
    client.fetch(query)
      .then((data)=> {
        setBlogData(data)
        setLoading(false)
      }) 
  }, [props?.query])

  return (
    <div className="work__portfolio ">
      {loading ? < Spinner message={"Loading..."}/> : blogData?.map((post, key) =>{
        return (
          <div key={key} className="work__portfolio-item">
            <HashLink to={ '/Blog/' + post?._id + '#'}  className="work__portfolio-item_img">
              <img src={ urlFor(post?.thumbnail) } alt={ post?.title } />
            </HashLink>
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
  )
  
}

function Blog() {
  const query = blogQuery;
  return (
    <>
      <NavBar />
      <div className='header'>
        <div className="header__heading">
          <h2>Blog</h2>
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
      <BlogPosts query={query}/>
      <div className="footer__wrapper">
        <Footer />
      </div>
    </>
  )
}

export default Blog