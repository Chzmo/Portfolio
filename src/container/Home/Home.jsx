import React from 'react';
import { postQuery } from '../../utils/query';

import Testimonial from '../../components/Testimonial/Testimonial';
import Mission from '../../components/Mission/Mission';
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar';
import About from '../../components/About/About'
import Hero from '../../components/Hero/Hero'
import Contact from '../Contact/Contact';
import Work from '../Work/Work';

import './Home.css' 

function Home() {

  const query =  postQuery;

  return (
    <>
      <NavBar />
      <Hero />
      <div  className='container'>
        <Mission />
        <About />
      </div>
      <section>
        <Work
          query = {query}
        />
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