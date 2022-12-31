import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom';
import { HashLink} from 'react-router-hash-link';

import './NavBar.css'



function NavBar() {
  
  const [mobileNav, setMobileNav] = useState(false);

  const responsiveNav = ()=>{
    !mobileNav ? setMobileNav(true): setMobileNav(false) ;
  }
  
  useEffect(() => {
    const closeNav = () =>{
      setMobileNav(false);
    }
    window.addEventListener('scroll', closeNav);
    
    return () => {
      window.removeEventListener('scroll', closeNav);
    }
  }, []);
  
  return (
    <nav className='navbar'>
      <div className="navbar__logo">
        <Link to="/">CH<span>ZMO</span></Link>
      </div>
      <div className="navbar__links">
        <ul className={mobileNav? "mobile": "navbar__links-ul"}>
          <li className="navbar__links-ul_li"><HashLink to="/#About" className="footer__top-nav-link" smooth>About Me</HashLink></li>
          <li className="navbar__links-ul_li"><HashLink className="navbar__links-ul_li-a" to="/Work" smooth>Latest Work</HashLink></li>
          <li className="navbar__links-ul_li"><Link className="navbar__links-ul_li-a" to="/Blog">Blog</Link></li>
          <li className="navbar__links-ul_li"><HashLink className="navbar__links-ul_li-a" to="/#Testimonials">Testimonials</HashLink></li>
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