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
        <p>
          As a web developer with over 5 years of experience, I have a deep 
          understanding of the technologies and techniques that are essential 
          for building successful web projects. I am proficient in a range of
          programming languages, including HTML, CSS, JavaScript, and PHP, 
          and I have experience with popular frameworks such as Angular, 
          React, and Laravel. With my full-stack skill set, I can handle 
          both the visual design and the underlying functionality of a website or 
          application, ensuring that it looks great and performs well.
        </p>
        <p>
          In addition to my technical expertise, I am also a strong communicator 
          and problem-solver. I enjoy working with clients to understand their needs 
          and goals, and I am committed to delivering high-quality work that meets their 
          expectations. I am always eager to learn and try new things, and I am constantly 
          expanding my knowledge and skills in the rapidly-evolving world of web development.
        </p>
        <p>
          In my free time, I enjoy staying active and exploring the great outdoors. I am an avid 
          hiker and rock climber, and I also enjoy playing guitar and experimenting with virtual 
          reality. I believe in the power of technology to connect people and improve lives, and 
          I am passionate about using my skills to make a positive impact in the world.
        </p>
        <a href="#Contact"><span>Lets Talk</span> <FiArrowUpRight /></a>
      </div>
    </div>
  )
}

export default About