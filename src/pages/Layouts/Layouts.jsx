import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./layouts.css";
import Add from "./images/Add.svg";
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

  let data=[
    {
      "Layout_Name":"Common Area ",
      "created_by":"Jose Anitt",
      "devices":"5",
      "last_used":"28/05/2023"
    },
    {
      "Layout_Name":"Cafeteria",
      "created_by":"Jose Anitt",
      "devices":"3",
      "last_used":"28/05/2023"
    },
    {
      "Layout_Name":"Reception",
      "created_by":"Jose Anitt",
      "devices":"2",
      "last_used":"28/05/2023"
    },
  ]
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
         {data.map((item)=><CustomLayoutcard key={item.Layout_Name} item={item}/>) }
         
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
