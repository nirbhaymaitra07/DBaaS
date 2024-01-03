import React, { useState } from "react";
import "./castingscreen.css";
import menu from "./images/menu.svg";
import image16 from "./images/image 16.svg";
import image17 from "./images/image 17.svg";
const CastingScreen = ({ opendropdown }) => {
  let [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="CastingScreen-Container">
      <div className="title-container">
        <h4>Dashboard</h4>
        <img
          src={menu}
          alt="menu"
          onClick={() => setOpenMenu((prev) => !prev)}
        />
      </div>
      <div className="screencontainer">
        <img src={image16} alt="" />
      </div>
      <div
        className="menuoptions"
        style={
          openMenu
            ? { width: "55%", height: "30%" }
            : { width: "0%", height: "0%" }
        }
      >
        <h4>Apply on selected device</h4>
        <h4>Apply on multiple devices</h4>
      </div>
    </div>
  );
};

export default CastingScreen;
