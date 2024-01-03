import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ArrowLeft from "./images/Arrow Left.svg";
import "./Preview.css";
import bg1 from "./images/Rectangle1.svg";
import bg2 from "./images/Rectangle2.svg";
import AddCircle from "./images/Add Circle.svg";

const Preview = () => {
  let location = useLocation();
  let imgsrc = location.state?.imgSrc;
  const [selectedBackground, setSelectedBackground] = useState(null);

  const handleBackgroundChange = (background) => {
    setSelectedBackground(background);
  };

  return (
    <div className="Cast_Preview_Environment">
      <div className="Cast_Preview_Environment_Header">
        <img
          src={ArrowLeft}
          alt="arrowleft"
          id="arrowleft"
          className="repeated_size"
        />
        <p className="Cast_Preview_Environment_Header_Content">Preview</p>
      </div>
      <div
        className="Cast_Preview_Environment_Rotation_Area"
        style={{ backgroundImage: `url(${selectedBackground || null})` }}
      >
        <img
          src={imgsrc}
          alt="imgSrc"
          className="Cast_Preview_Environment_Rotation_Area_img"
        />
      </div>
      <p className="Cast_Preview_BackGround_Content">Choose a background</p>
      <div className="Cast_Preview_Environment_Rotation_Area_BackgroungChange">
        <img
          src={bg1}
          alt=""
          className="Cast_preview_BackgroundChange_Img"
          onClick={() => handleBackgroundChange(bg1)}
        />
        <img
          src={bg2}
          alt=""
          className="Cast_preview_BackgroundChange_Img"
          onClick={() => handleBackgroundChange(bg2)}
        />
        <img
          src={AddCircle}
          alt=""
          className="Cast_preview_BackgroundChange_Img"
          style={{ backgroundColor: "#c9c3c3" }}
          onClick={() => handleBackgroundChange()}
        />
      </div>
    </div>
  );
};

export default Preview;
