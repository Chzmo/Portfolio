
import React, { useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import './Login.css'

function Login() {

    const responseGoogle = (response)=>{    
        localStorage.setItem('user', JSON.stringify(response));
        const decode = jwtDecode(localStorage.getItem('user'));
        const {name, sub, picture} = decode; 
        console.log(name, sub, picture)
    }
    return (
        <div className="login">
            <div className="shadow-2xl">
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