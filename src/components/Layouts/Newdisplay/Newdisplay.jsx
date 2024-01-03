import React from "react";
import "./newdisplay.css";
import uparrow from "./images/uparrow.svg";
import downarrow from "./images/downarrow.svg";
import placement from "./images/placement.svg";
import degree from "./images/degree.svg";
const Newdisplay = ({ hideNewDisplayPop }) => {
  return (
    <>
      <div className="newdisplay-container">
        <div className="newdisplay-top-section">
          <span>New display</span>
        </div>
        <div className="size-container">
          <label htmlFor="size">Size</label>
          <input type="text" value={"55 inches"} id="size" />
          <div className="icons">
            <img src={uparrow} alt="" />
            <img src={downarrow} alt="" />
          </div>
        </div>
        <div className="device-placement">
          <label htmlFor="placement">Device placement</label>
          <div className="input-container">
            <div className="icons">
              <img src={uparrow} alt="" />
              <img src={downarrow} alt="" />
            </div>
            <img src={placement} alt="" />
            <input type="text" id="placement" value={"Custom"} />
          </div>
          <div className="angle">
            <label htmlFor="angle">Angle:</label>
            <input type="number" id="angle" value={30} />
            <img src={degree} alt="" />
          </div>
        </div>
        <div className="newdisplay-actions">
          <button className="cancel" onClick={hideNewDisplayPop}>
            Cancel
          </button>
          <button className="save">Save</button>
        </div>
      </div>
    </>
  );
};

export default Newdisplay;
