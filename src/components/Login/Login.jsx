
import React, { useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useClickOutside } from '@mantine/hooks';
import jwtDecode from 'jwt-decode';

import { client } from '../../client';
import './Login.css'

function Login(props) {

    const ref = useClickOutside(() => props.login && props.setLogin(false));

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
      
        client.createIfNotExists(doc)
        .catch((error)=> {
          console.log(error);
          return
        });

    }
    return (
        <div className="login">
            <div className="login__wrapper">
                <div className="login__heading" ref={ref}>
                    <p>Sign in with CHZMO</p>
                    <p>To comment on the Blogg Post</p>
                </div>
                <GoogleLogin
                    onSuccess={(response) => responseGoogle(response)}
                    onFailure={(response) => console.log(response)}
                    cookiePolicy="single_host_origin"
                />
            </div>
        </div>
    )
}

export default Login