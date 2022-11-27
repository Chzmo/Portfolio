
import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Login from "./container/Login/Login";
import Home from "./container/Home/Home";
import Blog from "./container/Blog/Blog";
import Work from "./container/Work/Work";
import Contact from "./container/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="*" element = {<Home />}/>
          <Route path="/Login" element = {<Login />}/>
          <Route path="/Work" element = {<Work />}/>
          <Route path="/Blog" element = {<Blog />}/>
          <Route path="/Contact" element = {<Contact />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;