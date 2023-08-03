import React, { useEffect, useState } from 'react'

import { faqData } from '../../utils/utils'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'

import './Contact.css'


const Accordion = () => {
  const items = faqData

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  }

  return (
    <div id='FAQ' className='accordion '>
      <div className='accordion__header'><h2>Frequently Asked Questions</h2></div>
      {items.map((item, index) => (
        <div key={item.title} className="accordion__item">
          <div onClick={() => handleClick(index)}>
            <h3>{item.title}</h3>
          </div>
          {activeIndex === index && item.content}
        </div>
      ))}
    </div>
  );
};

function Contact() {
  const [currntUrl, setCurrntUrl] = useState(null)

  useEffect(() => {
    setCurrntUrl(window.location.href)
  }, [])

  return (
    <>
        <div id="Contact" className="contact">
          {(currntUrl && currntUrl === "http://localhost:5173/Contact" || 
            currntUrl === "https://chzmo.com/Contact" || 
            currntUrl === "https://www.chzmo.com/Contact" ||
            currntUrl === "https://inquisitive-croissant-516f39.netlify.app/Contact" ||
            currntUrl === "http://localhost:5173/Contact#FAQ" ||
            currntUrl === "https://inquisitive-croissant-516f39.netlify.app/Contact#FAQ") && (
          <>
            <NavBar />
          </>
          )}
          <div className="contact__header contact__wrapper">
            <p>Lets meet up over a zoom call or WhatsApp and discuss your venture and potential collaborations.</p>
          </div>
          <div className="contact__form">
            <form >
              <div id="div-name" className='contact__form-input'>
                <label htmlFor="name"><p>YOUR NAME <span>*</span></p></label>
                <input type="text" />
              </div>
              <div id="div-email"  className='contact__form-input'>
                <label htmlFor="email"><p>YOUR EMAIL <span>*</span></p></label>
                <input type="email" />
              </div>
              <div id="div-interest"  className='contact__form-input'>
                <label htmlFor="interest"><p>WHAT SERVICE YOU ARE INTERESTED IN<span>*</span></p></label>
                <input type="text" placeholder='e.g Website, Android app, Desktop app'/>
              </div>
              <div id="div-budget"  className='contact__form-input'>
                <label htmlFor="budget"><p>BUDGET RANGE (IN USD) <span>*</span></p></label>
                <input type="text" placeholder='e.g $250 - $350'/>
              </div>
              <div id="div-message" className='contact__form-input'>
                <label htmlFor="message"><p>PLEASE TELL A BIT ABOUT YOURSELF & YOUR PROJECT</p></label>
                <textarea 
                  name="message" 
                  id="" cols="30" rows="10" 
                  placeholder='Please share information about Your Project that can help me prepare for our meeting'
                  />
              </div>
              <div id="div-select"  className='contact__form-select'>
                <label htmlFor=""><p>HOW WOULD YOU LIKE TO CONNECT <span>*</span></p></label>
                <select name="connect" id="">
                  <option value={null} >Choose an option to connect</option>
                  <option value="I want to schedule a Zoom call">I want to schedule a Zoom call</option>
                  <option value="I want to connect via Whatsapp">I want to connect via Whatsapp</option>
                  <option value="I want to connect via Email">I want to connect via Email</option>
                </select>
              </div>
              <div id="div-submit" >
                <button type='submit'>Send Contact Request Now</button>
              </div>
            </form>
            {(currntUrl && currntUrl === "http://localhost:5173/Contact" || 
              currntUrl === "https://inquisitive-croissant-516f39.netlify.app/Contact" ||
              currntUrl === "http://localhost:5173/Contact#FAQ" ||
              currntUrl === "https://www.chzmo.com/Contact#FAQ" ||
              currntUrl === "https://chzmo.com/Contact#FAQ" ||
              currntUrl === "https://inquisitive-croissant-516f39.netlify.app/Contact#FAQ") && (
            <>
              <Accordion />
            </>
            )}
          </div>
        </div>
        {(currntUrl && currntUrl === "http://localhost:5173/Contact" || 
          currntUrl === "https://chzmo.com/Contact" || 
          currntUrl === "https://www.chzmo.com/Contact" ||
          currntUrl === "https://inquisitive-croissant-516f39.netlify.app/Contact" ||
          currntUrl === "http://localhost:5173/Contact#FAQ" ||
          currntUrl === "https://inquisitive-croissant-516f39.netlify.app/Contact#FAQ") && (
          <>
            <div className="footer__wrapper">
              <Footer />
            </div>
          </>
        )}
    </>
  )
}

export default Contact
