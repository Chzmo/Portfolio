import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import './About.css'
import ABOUTIMG from './../../assets/media/ar-shakir.jpg'
function About() {
  return (
    <div id='About' className='about'>
      <div className="about__left">
        <img src={ABOUTIMG} alt="Chisomo Zaliro Moyo" />
      </div>
      <div className="about__right">
        <h3>ABOUT ME</h3>
        <h2>MOYO CHISOMO</h2>
        <p>Hello, I am Chisomo Zaliro Moyo, a User Experience Designer specializing in bespoke, 
          artisanal, single origin, grass fed, fixed gear, and slow roasted apps & websites for 
          clients of all sizes. 
        </p>
        <p>
          I am capable within a wide range of tactical and big-picture design tasks.
          I am passionate about making sure that systems, interfaces, language and 
          graphics are human-friendly, emotive, aesthetically pleasing, clear, on-brand 
          and usable — with a touch of mellow smoothness. 
        </p>
        <p>
          I have worked in a variety of 
          environments, from mega-consultancies to small-ish agencies to product companies. 
          From workflow diagrams to detailed user interface mockups, I love shaping and 
          crafting on-screen experiences.
‍
          It's important to me to build long-term relationships with clients. My client’s 
          satisfaction is what motivates me most in my work. If you need high-quality design and 
          responsible approach to work, you're in the right place!
        </p>
        <a href="#Contact"><span>Lets Talk</span> <FiArrowUpRight /></a>
      </div>
    </div>
  )
}

export default About