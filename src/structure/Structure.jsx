import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layouts from "../pages/Layouts/Layouts";
import Cast from "../pages/Cast/Cast";
import Navbar from "../components/Navbar/Navbar";
import Newlayout from "../components/Layouts/NewLayout/Newlayout";
import Untitled from "../components/Layouts/NewLayout/Untitled/Untitled";
import Cast_Environment from "../pages/Cast/Cast_Environment/Cast_Environment";
import Preview from "../pages/Cast/Preview/Preview";
import Apps from "../pages/Cast/Apps/Apps";
import Chooselayout from "../pages/Cast/ChooseLayout/Chooselayout";
import NewAppConfig from "../pages/Cast/New_App_Config/NewAppConfig";
import ScheduleCasting from "../components/Schedule_Casting/ScheduleCasting";

const Structure = () => {
  let location = useLocation();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cast" element={<Cast />}>
          <Route path="/cast/castenvironment" element={<Cast_Environment />} />
          <Route path="/cast/preview" element={<Preview />} />
          <Route path="/cast/Apps" element={<Apps />} />
          <Route path="/cast/configuration" element={<Untitled />} />
          <Route path="/cast/layouts" element={<Chooselayout />} />
          <Route path="/cast/newapp" element={<NewAppConfig />} />
          <Route path="/cast/schedulecasting" element={<ScheduleCasting />} />
        </Route>
        <Route path="/layouts" element={<Layouts />}>
          <Route path="/layouts/newlayout" element={<Newlayout />} />
          <Route path="/layouts/untitled" element={<Untitled />} />
        </Route>
        <Route path="/cast" element={<Cast />} />
        <Route path="/profile" element={<Cast />} />
      </Routes>
      {(location.pathname === "/" ||
        location.pathname === "/layouts" ||
        location.pathname === "/cast") && <Navbar />}
    </>
  );
};

export default Structure;
