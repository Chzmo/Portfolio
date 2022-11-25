
import React from "react";
import { BrowserRouter as Router, Routes, Route, useRoutes,} from "react-router-dom";

import Blog from "./container/Blog/Blog";
import Home from "./container/Home/Home";
import Portfolio from "./container/Portfolio/Portfolio";

const App1 = () => {
  let routes = useRoutes([
    { path: "/*", element: <Home /> },
    { path: "/Work", element: <Portfolio /> },
    { path: "/Blog", element: <Blog /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <Router>
      <App1 />
    </Router>
  );
};

export default App;