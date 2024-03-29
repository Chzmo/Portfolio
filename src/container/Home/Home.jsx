import React, { useState } from 'react';

import Testimonial from '../../components/Testimonial/Testimonial';
import Mission from '../../components/Mission/Mission';
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar';
import About from '../../components/About/About'
import Hero from '../../components/Hero/Hero'
import Contact from '../Contact/Contact';
import Work from '../Work/Work';

import { fetchUser } from '../../utils/utils';
import './Home.css' 
import { client } from '../../client';

function Home() {

  const query = `*[_type == 'post']`
  client
    .fetch(query)
    .then(data => console.log(data))
    console.log(fetchUser)

  return (
    <>
      <NavBar />
      <Hero />
      <div  className='container'>
        <Mission />
        <About />
      </div>
      <section>
        <Work />
      </section>
      <Testimonial />
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