
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom';
import { HashLink} from 'react-router-hash-link';
import jwtDecode from 'jwt-decode';

import { fetchUser } from '../../utils/utils';
import { client } from '../../client';
import './NavBar.css'



function NavBar() {
  
  const [mobileNav, setMobileNav] = useState(false);
  const [user, setUser] = useState(fetchUser)
  console.log(window.location.origin)
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
    const decode = jwtDecode(response.credential);
    localStorage.setItem('user', JSON.stringify({
      sub:decode.sub,
      name:decode.name,
      given_name:decode.given_name,
      picture:decode.picture,
      email:decode.email
    }));
    console.log(decode)
    const {name, sub, picture, email} = decode; 
   
    const doc = {
        _id: sub,
        _type: 'user',
        userName:name,
        image: picture,
        email: email,
    }
  
    client.createIfNotExists(doc)
    .then(()=>{
      setUser(doc)
    })
    .catch(console.error);
  }

  return (
    <nav className='navbar'>
      <div className="navbar__logo">
        <HashLink to="/#">CH<span>ZMO</span></HashLink>
      </div>
      <div className="navbar__links">
        <ul className={mobileNav? "mobile": "navbar__links-ul"}>
          <li className="navbar__links-ul_li"><HashLink to="/#About" className="footer__top-nav-link" smooth>About Me</HashLink></li>
          <li className="navbar__links-ul_li"><HashLink className="navbar__links-ul_li-a" to="/Work#" smooth>Latest Work</HashLink></li>
          <li className="navbar__links-ul_li"><HashLink className="navbar__links-ul_li-a" to="/Blog#">Blog</HashLink></li>
          <li className="navbar__links-ul_li"><HashLink className="navbar__links-ul_li-a" to="/#Testimonials">Testimonials</HashLink></li>
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