import React, { useContext, useState } from "react";
import "./newlayout.css";
import Footer from "./Footer";
import arrow from "./images/Arrow Left.svg";
import arrowup from "./images/Arrow Up 1.svg";
import arrowdown from "./images/Arrow Down 1.svg";
import horizontal from "./images/Merge Table Horizontal.svg";
import add from "./images/Add.svg";
import { useNavigate } from "react-router-dom";
import { DataProvider } from "../../../Context/ContextProvider";

const Newlayout = React.memo(() => {
  let navigate = useNavigate();
  const [heightCount, setHeightCount] = useState(0);
  const [widthCount, setWidthCount] = useState(0);
  const [devCount, setdevCount] = useState("0");
  const [ftBackgroundColor, setFtBackgroundColor] = useState("#13027C");
  const [mBackgroundColor, setMBackgroundColor] = useState("#DFDFDF");
  const [ftTextColor, setFtTextColor] = useState("#FFFFFF");
  const [mTextColor, setMTextColor] = useState("#4A5A70");

  let { handleLayoutOnChange, gridLayoutform,handleNoOfDevicesOnChange } = useContext(DataProvider);
  console.log(gridLayoutform);
  const toggleColors = (clicked) => {
    if (clicked === "ft") {
      setFtBackgroundColor("#13027C");
      setMBackgroundColor("#DFDFDF");
      setFtTextColor("#FFFFFF");
      setMTextColor("#4A5A70"); 
    } else if (clicked === "m") {
      setFtBackgroundColor("#DFDFDF");
      setMBackgroundColor("#13027C");
      setFtTextColor("#4A5A70");
      setMTextColor("#FFFFFF");
    }
  };
  const increaseHeightCount = () => {
    setHeightCount(heightCount + 1);
  };

  const decreaseHeightCount = () => {
    if (heightCount > 0) {
      setHeightCount(heightCount - 1);
    }
  };

  const increaseWidthCount = () => {
    setWidthCount(widthCount + 1);
  };

  const decreaseWidthCount = () => {
    if (widthCount > 0) {
      setWidthCount(widthCount - 1);
    }
  };
  const increasedevCount = (e) => {
    setdevCount(parseInt(devCount) + 1);
    handleNoOfDevicesOnChange(parseInt(devCount) + 1)
  };

  const decreasedevCount = () => {
    if (devCount > 0) {
      setdevCount(parseInt(devCount) - 1);
      handleNoOfDevicesOnChange(parseInt(devCount) - 1)
    }
  };

  return (
    <div className="newlayout-container">
      <div className="top-title">
        <div>
          <img
            src={arrow}
            alt="arrow"
            className="arrowleft"
            onClick={() => navigate("/layouts")}
          />
        </div>
        <h2>New Layout</h2>
      </div>
      {/* layout */}
      {/* middle section */}

      <div className="bottom-container">
        <div className="nameContainer">
          <p className="nameL">Layout Name</p>
          <input
            className="inp"
            type="text"
            name="layoutName"
            placeholder="Enter name"
            value={gridLayoutform.layoutName}
            onChange={(e) => handleLayoutOnChange(e)}
          />
        </div>
        <div className="card">
          <div className="bg">Background</div>
          <div className="box">
            <div
              className="box1"
              style={{ backgroundColor: ftBackgroundColor, color: ftTextColor }}
              onClick={() => toggleColors("ft")}
            >
              ft.
            </div>
            <div
              className="box2"
              style={{ backgroundColor: mBackgroundColor, color: mTextColor }}
              onClick={() => toggleColors("m")}
            >
              m.
            </div>
          </div>
        </div>

        <div className="htContainer">
          <p className="ht">height</p>
          <div>
            <input
              className="inpt"
              type="number"
              placeholder="0"
              value={heightCount}
            />
            <img
              src={arrowup}
              alt="up"
              className="up"
              onClick={()=>increaseHeightCount(e)}
            />
            <img
              src={arrowdown}
              alt="down"
              className="down"
              onClick={decreaseHeightCount}
            />
          </div>
        </div>

        <div className="widthContainer">
          <p className="ht">Width</p>
          {/* <div> */}
          <input
            className="inpt"
            type="number"
            placeholder="0"
            value={widthCount}
          />
          <img
            src={arrowup}
            alt="up1"
            className="up"
            onClick={increaseWidthCount}
          />
          <img
            src={arrowdown}
            alt="down1"
            className="down"
            onClick={decreaseWidthCount}
          />
          {/* </div> */}
        </div>
        <div className="devices">
          <div className="devContainer">
            <p className="device">Devices</p>
            <p className="ht" id="devNo">
              Number of devices
            </p>
            <div>
              <input
                className="inpt"
                type="number"
                placeholder="0"
                name="NoOfDevices"
                onChange={(e) =>handleNoOfDevicesOnChange(devCount)}
                value={devCount}
              />
              <img
                src={arrowup}
                alt="up2"
                className="up2"
                onClick={increasedevCount}
              />
              <img
                src={arrowdown}
                alt="down2"
                className="down2"
                onClick={decreasedevCount}
              />
            </div>
          </div>
        </div>
        <div className="sizeContainer">
          <p className="ht">Size</p>
          <div>
            <input
              className="inpt"
              type="number"
              placeholder="55 Inches"
              // value={widthCount}
            />
            <img
              src={arrowup}
              alt="up1"
              className="up"
              onClick={increaseWidthCount}
            />
            <img
              src={arrowdown}
              alt="down1"
              className="down"
              onClick={decreaseWidthCount}
            />
          </div>
        </div>
        <div className="Container">
          <p className="ht">Device placement</p>
          <div aria-disabled="true">
            <div className="inpt">
              <img src={horizontal} className="merge" />
              <p className="horizntl">Horizontal</p>
            </div>
            <img src={arrowup} alt="up1" className="up" />
            <img src={arrowdown} alt="down1" className="down" />
          </div>
        </div>
        <div className="last-container">
          <div className="addDev">
            <img src={add} alt="addImg" />
          </div>
          <div className="moreDev">Add more devices</div>
        </div>
      </div>

      {/* footer section */}
      {/* this is a comment */}
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
});

export default Newlayout;
