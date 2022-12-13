import React from 'react'
import {FiArrowUpRight} from 'react-icons/fi'

import './Hero.css'
import IMG1 from '../../assets/media/chisomo.jpg'

export const Intro = () =>{
    return (
        <>
            <div className="hero__sub-heading">
                <p>Currently working as a Director of Design @Redwhale, 
                    I am passionate about making sure that systems, interfaces, 
                    language and graphics are human-friendly, emotive, 
                    aesthetically pleasing, clear, on-brand and 
                    usable — with a touch of mellow smoothness.
                </p>
            </div>
            <div className="hero__sub-projects">
                <p>12</p>
                <h3>SUCCESSFULLY COMPLETED PROJECTS</h3>
            </div>
            <div className="hero__sub-years">
                <p>3+</p>
                <h3>YEARS OF EXPERIENCE</h3>
            </div>
        </>
    );
}

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
        <div className="hero__sub">
            <Intro />
        </div>
    </div>
  )
}

export default Hero