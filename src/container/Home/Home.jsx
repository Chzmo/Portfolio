import React from 'react';
import NavBar from '../../components/NavBar/NavBar'
import Hero from '../../components/Hero/Hero'



function Home() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Hero />
      </div>
    </>
  )
}

export default Home