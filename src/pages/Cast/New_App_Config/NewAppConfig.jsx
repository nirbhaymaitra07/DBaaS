import React, { useContext } from "react";
import "./NewAppConfig.css";
import ArrowLeft from "./images/Arrow-left.svg";
import ArrowRight from "./images/Arrow-right.svg";
import Remove from "./images/Remove.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { DataProvider } from "../../../Context/ContextProvider";

const NewAppConfig = () => {
  let { layout } = useContext(DataProvider);
  let location = useLocation();
  let navigate = useNavigate();
  return (
    <div className="main-container">
      <div className="app-config-header">
        <div className="app-config-header-arrow-image">
          <img src={ArrowLeft} alt="arrow-left" />
        </div>
        <div className="app-config-header-heading">
          <p>New App Configuration</p>
        </div>
        <div className="horizontal-line"></div>
      </div>
      <div className="app-config-body">
        <div className="app-config-body-form">
          <form className="form-div">
            <label className="form-details">Layout</label>
            <input className="form-details-input-1" value={layout?.Area} />
            <label className="form-details">App Configuration Name</label>
            <input className="form-details-input-2" placeholder="Enter Name" />
          </form>
        </div>
      </div>
      <div className="app-config-footer">
        <div className="app-config-discard">
          <img className="app-config-discard-img" src={Remove} />
          <button className="discard-btn">DISCARD</button>
        </div>
        <div
          className="app-config-next"
          onClick={() =>
            navigate("/cast/configuration", {
              state: { layout: location?.state?.layout },
            })
          }
        >
          Next
          <img className="app-config-next-img" src={ArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default NewAppConfig;
