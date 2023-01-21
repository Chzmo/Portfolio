
import React, { useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import './Login.css'

function Login() {

    const responseGoogle = (response)=>{    
        localStorage.setItem('user', JSON.stringify(response.credential));
        const decode = jwtDecode(localStorage.getItem('user'));
        const {name, sub, picture} = decode; 
        console.log(name, sub, picture, email)
    }
    return (
        <div className="login">
            <div className="login__wrapper">
                <div className="login__heading">
                    <p>Sign in with CHZMO</p>
                    <p>To continue commenting on the post</p>
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