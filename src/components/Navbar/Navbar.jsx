import React, { useEffect, useState } from "react";
import "./navbar.css";
// import Home from "./images/Home.jsx/index.js"
import Cast from "./images/CastSVG.jsx";
// import profile from "./images/Profile.jsx/index.js"
import Layout from "./images/LayoutSVG";
import Home from "./images/HomeSVG.jsx";
import Profile from "./images/ProfileSVG.jsx";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  let location = useLocation();
  let [activetabs, setActiveTabs] = useState(location.pathname);

  useEffect(() => {
    setActiveTabs(location.pathname);
  }, [location.pathname]);
  return (
    <div className="navbar-container">
      <Link to="/" style={{ textDecoration: "none", display: "contents" }}>
        <div className="icon-container">
          <div className={`icon ${activetabs === "/" ? "selected" : ""}`}>
            <Home fillColor={activetabs === "/" ? "white" : ""} />
          </div>
          <span>Home</span>
        </div>
      </Link>
      <Link
        to="/layouts"
        style={{ textDecoration: "none", display: "contents" }}
      >
        <div className="icon-container">
          <div
            className={`icon active ${
              activetabs === "/layouts" ? "selected" : ""
            }`}
          >
            <Layout fillColor={activetabs === "/layouts" ? "white" : ""} />
          </div>
          <span>Layouts</span>
        </div>
      </Link>
      <div className="icon-container">
        <Link
          to="/cast"
          style={{
            color: "white",
            textDecoration: "none",
            display: "contents",
          }}
        >
          <div className={`icon ${activetabs === "/cast" ? "selected" : ""}`}>
            <Cast fillColor={activetabs === "/cast" ? "white" : ""} />
          </div>
        </Link>
        <span>Cast</span>
      </div>
      <div className="icon-container">
        <Link
          to="/profile"
          style={{
            color: "white",
            textDecoration: "none",
            display: "contents",
          }}
        >
          <div
            className={`icon ${activetabs === "/profile" ? "selected" : ""}`}
          >
            <Profile fillColor={activetabs === "/profile" ? "white" : ""} />
          </div>
        </Link>
        <span>Profile </span>
      </div>
    </div>
  );
};

export default Navbar;
