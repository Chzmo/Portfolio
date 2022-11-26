import React from 'react';

import NavBar from '../../components/NavBar/NavBar';
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Contact from '../Contact/Contact';

function Home() {
  return (
    <>
      <NavBar />
      <div  className='container'>
        <Hero />
        <About />
      </div>
      <Contact />
    </>
  )
}

export default Home