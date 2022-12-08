
import React from "react";
import { BrowserRouter, Routes, Route, useParams} from "react-router-dom";

import Login from "./container/Login/Login";
import Home from "./container/Home/Home";
import Blog from "./container/Blog/Blog";
import Work from "./container/Work/Work";
import Contact from "./container/Contact/Contact";
import Single from "./container/Single/Single";

const App = () => {;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element = {<Home />}/>
          <Route path="/Work" element = {<Work />}/>
          <Route path="/Work/single" element= {<Single />}/>
          <Route path="/blog" element = {<Blog />}/>
          <Route path="/Contact" element = {<Contact />}/>
          <Route path="/Login" element = {<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;