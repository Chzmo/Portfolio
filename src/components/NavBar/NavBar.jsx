
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import React, { useEffect, useState } from 'react';
import {useClickOutside} from '@mantine/hooks'
import { HashLink} from 'react-router-hash-link';
import jwtDecode from 'jwt-decode';

import { fetchUser } from '../../utils/utils';
import { client } from '../../client';
import './NavBar.css'



function NavBar() {
  const [user, setUser] = useState(fetchUser);
  const [mobileNav, setMobileNav] = useState(false);
  const ref = useClickOutside(() => mobileNav && setMobileNav(false));
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
  
  const responseGoogle = (response)=>{    
    localStorage.setItem('user', JSON.stringify(response.credential));
    const decode = jwtDecode(localStorage.getItem('user'));

    const {name, sub, picture, email} = decode; 
   
    const doc = {
        _id: sub,
        _type: 'user',
        userName:name,
        image: picture,
        email: email,
    }
  
    client
    .createIfNotExists(doc)
    .catch((error)=> {
      console.log(error);
      return
    })
    location.reload();
    setUser(doc);
  }

  return (
    <nav className='navbar'>
      <div className="navbar__logo">
        <HashLink to="/#">CH<span>ZMO</span></HashLink>
      </div>
      <div ref={ref} className="navbar__links">
        <ul className={mobileNav? "mobile": "navbar__links-ul"}>
          <li className="navbar__links-ul_li"><HashLink to="/#About" className="footer__top-nav-link" smooth>About Me</HashLink></li>
          <li className="navbar__links-ul_li"><HashLink className="navbar__links-ul_li-a" to="/Work#" smooth>Latest Work</HashLink></li>
          <li className="navbar__links-ul_li"><HashLink className="navbar__links-ul_li-a" to="/Blog#">Blog</HashLink></li>
          <li className="navbar__links-ul_li"><HashLink className="navbar__links-ul_li-a" to="/#Testimonial">Testimonials</HashLink></li>
          <li className="navbar__links-ul_li"><HashLink className="navbar__links-ul_li-a" to="/Contact#">Contact</HashLink></li>
          {!user ? (
            <div className="navbar__links-ul_li-a">
            <GoogleLogin 
              onSuccess={respose => responseGoogle(respose)}
              onError={()=> console.error()}
              cookiePolicy="single_host_origin"
            />
          </div>
          ):(
          <li className="navbar__links-ul_li">
            <div className="navbar__links-ul_li-a">
              {user?.given_name}
            </div>
          </li>
          )}
        </ul>
        <div onClick={responsiveNav} className='button'>
          <div></div><div></div><div></div>
        </div>
        
      </div>
    </nav>
  )
}

export default NavBar