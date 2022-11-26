import React from 'react'
import {FiArrowUpRight} from 'react-icons/fi'

import './Hero.css'
import IMG1 from '../../assets/media/shakir.png'

function Hero() {
  return (
    <div className='hero'>
        <div className="hero__main">
            <div className="hero__main-left">
                <img src={IMG1} alt="" />
            </div>
            <div className="hero__main-right">
                <h3>HELLO THERE, I AM:</h3>
                <h1>MOYO CHISOMO</h1>
                <p>I create and maintain modern websites
                    and applications. I solve all your 
                    business problems.
                </p>
                <a href="#Contact"><span>Lets Talk</span> <FiArrowUpRight /></a>

            </div>
        </div>
    </div>
  )
}

export default Hero