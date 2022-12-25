import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import './NavBar.css'



function NavBar() {
  
  const [mobileNav, setMobileNav] = useState(false)

  function responsiveNav(){
    !mobileNav ? setMobileNav(true): setMobileNav(false) ;
  }
  
  return (
    <nav className='navbar'>
      <div className="navbar__logo">
        <Link to="/">CH<span>ZMO</span></Link>
      </div>
      <div className="navbar__links">
        <ul className={mobileNav? "mobile": "navbar__links-ul"}>
          <li className="navbar__links-ul_li"><Link className="navbar__links-ul_li-a" to="#Testimonials">Testimonials</Link></li>
          <li className="navbar__links-ul_li"><Link className="navbar__links-ul_li-a" to="/Work">Latest Work</Link></li>
          <li className="navbar__links-ul_li"><Link className="navbar__links-ul_li-a" to="/Blog">Blog</Link></li>
          <li className="navbar__links-ul_li"><Link className="navbar__links-ul_li-a" to="/Contact">Contact</Link></li>
          <li className="navbar__links-ul_li"><Link className="navbar__links-ul_li-a" to="/Login">Login</Link></li>
        </ul>
        <div onClick={responsiveNav} className='button'>
          <div></div><div></div><div></div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar