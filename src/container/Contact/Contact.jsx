import React from 'react'

import NavBar from '../../components/NavBar/NavBar'
import './Contact.css'

function Contact() {
  return (
    <>
        <div id="Contact" className="contact">
          <div className="contact__header">
            <p>Lets meet up over a zoom call or telegram and discuss your venture and potential collaborations.</p>
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
                <input type="text" />
              </div>
              <div id="div-budget"  className='contact__form-input'>
                <label htmlFor="budget"><p>BUDGET RANGE (IN USD) <span>*</span></p></label>
                <input type="text" placeholder='e.g $100 - $150'/>
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
          </div>
        </div>
    </>
  )
}

export default Contact