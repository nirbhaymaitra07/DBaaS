import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import remove from "./images/Remove.svg";
import Next from "./images/Arrow Right.svg";
import "./footer.css";
import { DataProvider } from "../../../Context/ContextProvider";

function Footer() {
  let navigate = useNavigate();
  let { createLayout } = useContext(DataProvider);
  return (
    <div>
      <div className="rectangle-parent6">
        <div className="group-child9" onClick={() => navigate("/layouts")}>
          <div className="remove-parent">
            <img className="remove-icon" alt="" src={remove} />
            <div className="add-more-devices">Discard</div>
          </div>
        </div>
      </div>
      <div className="group-parent2">
        <div
          className="rectangle-parent5"
          onClick={() => {
            createLayout();
            navigate("/layouts/untitled ");
          }}
        >
          <div className="group-child8" />
          <div className="arrow-right-parent">
            <img className="arrow-right-icon" alt="" src={Next} />
            <div className="height">Next</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
