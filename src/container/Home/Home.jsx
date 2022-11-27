import React from 'react';

import NavBar from '../../components/NavBar/NavBar';
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Contact from '../Contact/Contact';
import Footer from '../../components/Footer/Footer'

import './Home.css'

function Home() {
  return (
    <>
      <NavBar />
      <div  className='container'>
        <Hero />
        <About />
      </div>
      <section className='contact__wrapper'>
        <Contact />
      </section>
      <section className='footer__wrapper'>
        <Footer />
      </section>
    </>
  )
}

export default Home