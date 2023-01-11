import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { relatedWorkQuery, singleWorkQuery } from '../../utils/query'
import { client, urlFor } from '../../client'

import NavBar from '../../components/NavBar/NavBar'
import Work from '../Work/Work'
import Footer from '../../components/Footer/Footer'
import srarRating from '../../assets/media/star-rating.svg'

import './Single.css'
import Spinner from '../../components/Spinner/Spinner'

function SingleWork() {
  
  const [viewFull, setViewFull] = useState(false);
  const [singleWorkData, setSingleWorkData] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams()

  const fullPreview = () =>{
    setViewFull(true)
  }

  useEffect(() => {
    setLoading(true)
    const query = singleWorkQuery(params?._id);
    client.fetch(query)
      .then((data)=> {
        setSingleWorkData(data[0]);
        setLoading(false)
      })
  }, [params])
  
  return (
    <>
    <NavBar />
    <div className='singleWork'>
      <div className="singleWork__header">
        {singleWorkData && (
          <>
            <h2>{singleWorkData?.title}</h2>
            <div className="singleWork__header-related">
              <button>Landing Page</button>
              <button>Shopify</button>
              <button>Wordpress</button>
            </div>
          </>
        )}
      </div>
      <div className="singleWork__details">
        <div className="singleWork__details-time">
            <p>COMPLETION TIME</p>          
            <p>{singleWorkData?.completionTime} WEEKS</p>         
        </div>
        <div className="singleWork__details-charges">
          <p>FEE  CHARGED</p>          
          <p>$ 0.00</p>  
        </div>
        <div className="singleWork__details-feedback">
          <p>Client Feedback:</p>          
          <img src={srarRating} alt="" srcSet="" />
        </div> 
      </div> 
      <div className="singleWork__main">
        {loading ? <Spinner  message={"Loading..."}/> : 
          <div className={ !viewFull ? "singleWork__main-img" : "preview"}>
            <div id='singleWork'><img src={singleWorkData && urlFor(singleWorkData?.thumbnail) } /></div>
            { !viewFull &&
              <button onClick={ fullPreview }>Click To View Full Preview</button>
            }
          </div>
        }
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
    < Work 
      query={relatedWorkQuery(params._id)}
    />
    <div className="footer__wrapper">
      <Footer />
    </div>
    </>
  )
}

export default SingleWork