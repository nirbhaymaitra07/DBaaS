import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layouts from "../pages/Layouts/Layouts";
import Cast from "../pages/Cast/Cast";
import Navbar from "../components/Navbar/Navbar";
import Cast_Environment from "../pages/Cast/Cast_Environment/Cast_Environment";
const Structure = () => {
  let location = useLocation();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/layouts" element={<Layouts />} />
        <Route path="/cast" element={<Cast />} />
        <Route path="/profile" element={<Cast />} />
        <Route path="/CastEnvironment" element={<Cast_Environment/>} />

      </Routes>
     {(location.pathname==="/" || location.pathname==="/layouts" || location.pathname==="/cast") && <Navbar />}
    </>
  );
};

export default Structure;
