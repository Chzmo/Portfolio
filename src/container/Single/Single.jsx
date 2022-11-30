import React from 'react'

import NavBar from '../../components/NavBar/NavBar'

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
        <a href='' className="single__details-view">
          <p>VIEW</p>          
          <p>FULL DETAILS</p>               
        </a>
        <div className="single__details-feedback">
          <p>VIEW</p>          
          <img src={} alt="" srcset="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Single