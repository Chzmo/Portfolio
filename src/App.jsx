import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Login from "./container/Login/Login";
import Home from "./container/Home/Home";
import Blog from "./container/Blog/Blog";
import Work from "./container/Work/Work";
import Contact from "./container/Contact/Contact";
import SingleWork from "./container/SingleWork/SingleWork";
import SingleBlog from "./container/SingleBlog/SingleBlog";

const App = () => {
    
  return (
    <GoogleOAuthProvider 
      clientId={import.meta.env.VITE_OAUTH_CLIENT_ID}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/Work" element = {<Work />}/>
          <Route path="/Work/:_id" element= {<SingleWork />}/>
          <Route path="/Blog/:single" element= {<SingleBlog />}/>
          <Route path="/Blog" element = {<Blog />}/>
          <Route path="/Contact" element = {<Contact />}/>
          <Route path="/Login" element = {<Login />}/>
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;