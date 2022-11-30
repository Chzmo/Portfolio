import React from 'react'

import NavBar from '../../components/NavBar/NavBar'
import srarRating from '../../assets/media/star-rating.svg'
import './Single.css'

function Single() {
  return (
    <>
    <NavBar />
    <div className='single'>
      <div className="single__header">
        <h2>Shopify Website Design and Development for Organic Products</h2>
        <div className="single__header-related">
          <button>Landing Page</button>
          <button>Shopify</button>
          <button>Wordpress</button>
        </div>
      </div>
      <div className="single__details">
        <div className="single__details-time">
            <p>COMPLETION TIME</p>          
            <p>10 WEEKS</p>          
        </div>
        <div className="single__details-charges">
          <p>FEE  CHARGED</p>          
          <p>$0.00</p>  
        </div>
        <div className="single__details-feedback">
          <p>Client Feedback:</p>          
          <img src={srarRating} alt="" srcset="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Single