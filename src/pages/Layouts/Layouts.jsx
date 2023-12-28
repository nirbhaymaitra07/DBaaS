import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./layouts.css";
import Add from "./images/Add.svg";
import chevron from "./images/chevron.svg";
import CustomLayoutcard from "../../components/Layouts/Customlayoutcard/CustomLayoutcard";
import Templatelayoutcard from "../../components/Layouts/TemplateLayoutcard/Templatelayoutcard";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
const Layouts = () => {
  let location=useLocation()
  let navigate=useNavigate()
  let [activeTab,setactiveTab]=useState("custom")
  function switchActiveTab(tab){
    setactiveTab(tab)
  }

  const DataConfiguration = [
    {
      img: chevron,
      Area: "Daily - Common area",
      CreatedBy: "Jose Anitt",
      createon: "23/01/2023",
      LastUsed: "28/05/2023",
      HotSpot: "", // Assuming PersonalHotspot is a variable
    },
    {
      img: chevron,
      Area: "June Menu",
      CreatedBy: "Jose Anitt",
      createon: "23/01/2023",
      LastUsed: "28/05/2023",
      HotSpot: "", // Assuming PersonalHotspot is a variable
    },
    {
      img: chevron,
      Area: "Cafeteria",
      CreatedBy: "Jose Anitt",
      createon: "23/01/2023",
      LastUsed: "28/05/2023",
      HotSpot: "", // Assuming PersonalHotspot is a variable
    },
  ];
  return (
    <>
    {location.pathname==="/layouts"?<div className="layouts-container">
      <div className="top-section">
        <h4>Layouts</h4>
        <div className="image-container">
          <img src={Add} alt="AddButton" onClick={()=>navigate("/layouts/newlayout")} />
        </div>
      </div>
      <div className="bottom-section">
        <div className="tabs">
          <div className="custom" id={`${activeTab==="custom"?"activetab":""}`} onClick={()=>switchActiveTab("custom")}>
            <span>Custom</span>
          </div>
          <div className="templates" id={`${activeTab==="templates"?"activetab":""}`} onClick={()=>switchActiveTab("templates")}>
            <span>Templates</span>
          </div>
        </div>
       {activeTab==="custom"? <div className="custom-card-container">
         {DataConfiguration.map((item)=><CustomLayoutcard key={item.Area} item={item}/>) }
         
        </div>:<div className="templates-card-container">
          <Templatelayoutcard/>
          <Templatelayoutcard/>
          <Templatelayoutcard/>
        </div>}
      </div>
      {/* <Navbar /> */}
    </div>:
      <Outlet/>}
    </>
  );
};

export default Layouts;
