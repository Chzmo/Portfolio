import React, { useState } from 'react'

import NavBar from '../../components/NavBar/NavBar'
import Work from '../Work/Work'

import srarRating from '../../assets/media/star-rating.svg'
import './Single.css'
import Footer from '../../components/Footer/Footer'

function SingleWork() {
  
  const [viewFull, setViewFull] = useState(false);

  const fullPreview = () =>{
    setViewFull(true)
  }

  return (
    <>
    <NavBar />
    <div className='singleWork'>
      <div className="singleWork__header">
        <h2>Shopify Website Design and Development for Organic Products</h2>
        <div className="singleWork__header-related">
          <button>Landing Page</button>
          <button>Shopify</button>
          <button>Wordpress</button>
        </div>
      </div>
      <div className="singleWork__details">
        <div className="singleWork__details-time">
            <p>COMPLETION TIME</p>          
            <p>10 WEEKS</p>          
        </div>
        <div className="singleWork__details-charges">
          <p>FEE  CHARGED</p>          
          <p>$0.00</p>  
        </div>
        <div className="singleWork__details-feedback">
          <p>Client Feedback:</p>          
          <img src={srarRating} alt="" srcSet="" />
        </div> 
      </div>
      <div className="singleWork__main">
        <div className={ !viewFull ? "singleWork__main-img" : "preview"}>
          { !viewFull &&
            <button onClick={ fullPreview }>Click To View Full Preview</button>
          }
        </div>
        <div className="singleWork__main-quote">
          <h2>Get Started With Chzmo</h2>
          <p>Please provide some information about your 
            task and after checking the details, I will 
            send you email to schedule a call or chat.
          </p>
          <a href="/Contact">Request a Quote</a>
        </div>
        <div className="singleWork__related">
          <h2>Related Work</h2>
        </div>
      </div>
    </div>
    < Work />
    <div className="footer__wrapper">
      <Footer />
    </div>
    </>
  )
}

export default SingleWork