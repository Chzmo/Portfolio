import React, { useEffect, useState } from 'react';
import { postQuery } from '../../utils/query';
import { client } from '../../client';

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

  const [postData, setPostData] = useState(null);
  const [loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
    const query = postQuery;
    client.fetch(query)
      .then((data)=> {
        setPostData(data)
        setLoading(false)
      }) 
  }, [])
  
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
          loading = {loading}
          setLoading = {setLoading}
          postData = {postData}
          setPostData = {setPostData}
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