import React from 'react'

import './NavBar.css'

function NavBar() {
  return (
    <nav id='home' className='navbar'>
      <div className="navbar__logo">
        <a href="/">CH<span>ZMO</span></a>
      </div>
      <div className="navbar__links">
        <ul className="navbar__links-ul">
          <li className="navbar__links-ul_li"><a className="navbar__links-ul_li-a"href="/#Testimonials">Testimonials</a></li>
          <li className="navbar__links-ul_li"><a className="navbar__links-ul_li-a"href="/Work">Latest Work</a></li>
          <li className="navbar__links-ul_li"><a className="navbar__links-ul_li-a"href="/Blog">Blog</a></li>
          <li className="navbar__links-ul_li"><a className="navbar__links-ul_li-a"href="/Contact">Contact</a></li>
          <li className="navbar__links-ul_li"><a className="navbar__links-ul_li-a"href="/Login">Login</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar