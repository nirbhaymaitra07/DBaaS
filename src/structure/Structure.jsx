import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layouts from "../pages/Layouts/Layouts";
import Cast from "../pages/Cast/Cast";
import Navbar from "../components/Navbar/Navbar";
 import Newlayout from "../components/Layouts/NewLayout/Newlayout";
import Casting from "../components/Schedule_Casting/Casting";
import ScheduleCasting from "../components/Schedule_Casting/ScheduleCasting";
const Structure = () => {
  let location = useLocation();
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/layouts" element={<Layouts />} />
        <Route path="/cast" element={<Cast />} />
        <Route path="/profile" element={<Cast />} />
       <Route path="/ScheduleCasting">
      </Routes>
     {(location.pathname==="/" || location.pathname==="/layouts" || location.pathname==="/cast") && <Navbar />} */}
     <Casting/>
    </>
  );
};

export default Structure;
