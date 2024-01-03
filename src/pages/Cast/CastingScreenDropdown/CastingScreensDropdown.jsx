import React from "react";
import "./castingscreendropdown.css";
import CastingScreen from "../CastingScreen/CastingScreen";
const CastingScreensDropdown = ({ opendropdown }) => {
  return (
    <div className="castingscreen-dropdown">
      <CastingScreen />
      <CastingScreen />
      <CastingScreen />
      <CastingScreen />
      <CastingScreen />
      <CastingScreen />
    </div>
  );
};

export default CastingScreensDropdown;
