
import React from "react";
import { BrowserRouter, Routes, Route, useParams} from "react-router-dom";

import Login from "./container/Login/Login";
import Home from "./container/Home/Home";
import Blog from "./container/Blog/Blog";
import Work from "./container/Work/Work";
import Contact from "./container/Contact/Contact";

const App = () => {;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element = {<Home />}/>
          <Route path="/work" element = {<Work />}/>
          <Route path="/blog" element = {<Blog />}/>
          <Route path="/contact" element = {<Contact />}/>
          <Route path="/login" element = {<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;