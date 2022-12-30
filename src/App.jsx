
import React from "react";
import { BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import { Auth0Provider } from '@auth0/auth0-react';
// import { auth0Config } from './auth0-config';

import Login from "./container/Login/Login";
import Home from "./container/Home/Home";
import Blog from "./container/Blog/Blog";
import Work from "./container/Work/Work";
import Contact from "./container/Contact/Contact";
import SingleWork from "./container/SingleWork/SingleWork";
import SingleBlog from "./container/SingleBlog/SingleBlog";

const App = () => {
  return (
    <Auth0Provider
      domain={process.env.}
      clientId="YOUR_CLIENT_ID"
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/Work" element = {<Work />}/>
          <Route path="/Work/:single" element= {<SingleWork />}/>
          <Route path="/Blog/:single" element= {<SingleBlog />}/>
          <Route path="/Blog" element = {<Blog />}/>
          <Route path="/Contact" element = {<Contact />}/>
          <Route path="/Login" element = {<Login />}/>
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  );
};

export default App;