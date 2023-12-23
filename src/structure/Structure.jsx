import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layouts from "../pages/Layouts/Layouts";
import Cast from "../pages/Cast/Cast";
import Navbar from "../components/Navbar/Navbar";
 import Newlayout from "../components/Layouts/NewLayout/Newlayout";

const Structure = () => {
  let location = useLocation();
  return (
    <>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/layouts" element={<Layouts />} />
        <Route path="/cast" element={<Cast />} >
             <Route path="/cast/castenvironment" element={<Cast_Environment/>}/>
             <Route path="/cast/preview" element={<Preview/>}/>
             <Route path="/cast/Apps" element={<Apps/>}/>
          </Route>
        <Route path="/profile" element={<Cast />} />
       
      </Routes>
     {(location.pathname==="/" || location.pathname==="/layouts" || location.pathname==="/cast") && <Navbar />}
    </>
  );
};

export default Structure;
