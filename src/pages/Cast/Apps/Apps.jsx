import React, { useState } from "react";
import close_btn from "./images/Close.svg";
import ArrowDown_btn from "./images/Arrow Down 1.svg";
import "./Apps.css";
import CastingScreensDropdown from "../CastingScreenDropdown/CastingScreensDropdown";
import { useNavigate } from "react-router-dom";
const Apps = () => {
  let [opendropdown, setOpenDropDown] = useState("");
  let navigate = useNavigate();
  function OpenDropDown(container) {
    setOpenDropDown(container);
  }
  return (
    <div className="Apps_Parent">
      <div className="topheader">
        <img
          src={close_btn}
          alt="close_btn"
          className="Apps_Close_Btn"
          onClick={() => navigate("/cast/castenvironment")}
        />
        <p className="Apps_Header_Content">Apps</p>
      </div>
      <div
        className="Apps_Screens_Header1"
        onClick={() => OpenDropDown("Dropdown-1")}
      >
        <p className="Apps_Screens_Header_Content">Boston 311 V2</p>
        <img
          src={ArrowDown_btn}
          alt="ArrowDown_btn"
          className="ArrowDown_btn"
          style={
            opendropdown === "Dropdown-1"
              ? { transform: "rotate(180deg)" }
              : { transform: "rotate(0deg)" }
          }
        />
      </div>
      <div
        className="Dropdown-1"
        style={
          opendropdown === "Dropdown-1" ? { height: "70%" } : { height: "0%" }
        }
      >
        <CastingScreensDropdown opendropdown={opendropdown} />
      </div>
      <div
        className="Apps_Screens_Header2"
        onClick={() => OpenDropDown("Dropdown-2")}
      >
        <p className="Apps_Screens_Header_Content">Data Lake V3</p>
        <img
          src={ArrowDown_btn}
          alt="ArrowDown_btn"
          className="ArrowDown_btn"
          style={
            opendropdown === "Dropdown-2"
              ? { transform: "rotate(180deg)" }
              : { transform: "rotate(0deg)" }
          }
        />
      </div>
      <div
        className="Dropdown-2"
        style={
          opendropdown === "Dropdown-2" ? { height: "70%" } : { height: "0%" }
        }
      >
        <CastingScreensDropdown opendropdown={opendropdown} />
      </div>
      <div
        className="Apps_Screens_Header3"
        onClick={() => OpenDropDown("Dropdown-3")}
      >
        <p className="Apps_Screens_Header_Content">SUHAaaS</p>
        <img
          src={ArrowDown_btn}
          alt="ArrowDown_btn"
          className="ArrowDown_btn"
          style={
            opendropdown === "Dropdown-3"
              ? { transform: "rotate(180deg)" }
              : { transform: "rotate(0deg)" }
          }
        />
      </div>
      <div
        className="Dropdown-3"
        style={
          opendropdown === "Dropdown-3" ? { height: "70%" } : { height: "0%" }
        }
      >
        <CastingScreensDropdown opendropdown={opendropdown} />
      </div>
    </div>
  );
};

export default Apps;
