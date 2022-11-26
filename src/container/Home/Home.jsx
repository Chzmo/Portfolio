import React from 'react';
import NavBar from '../../components/NavBar/NavBar'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'

function Home() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Hero />
      </div>
      <div className='container'>
        <About/>
      </div>
    </>
  )
}

export default Home