import React, { useContext, useState } from "react";
import arrow from "./images/ArrowLeft1.svg";
import "./casting.css";
import { Link, useNavigate } from "react-router-dom";
import { DataProvider } from "../../Context/ContextProvider";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import ScheduleCasting from "./ScheduleCasting";
function Casting({ schedulecasting, hideschedulecasting }) {
  // const [Frequency, setFrequency] = useState("");
let {handleFrequencyChange,selectedFrequency}=useContext(DataProvider)
  let navigate=useNavigate()
  
  return (
    <div
      className="casting-container"
      style={
        schedulecasting
          ? { transform: "translateX(0%)" }
          : { transform: "translateX(-100%)" }
      }
    >
      <div className="title-section">
        <div>
          <img
            src={arrow}
            alt="arrow"
            className="leftarrow"
            onClick={hideschedulecasting}
          />
        </div>
        <h2>Schedule casting</h2>
      </div>
      <div className="cast-section">
        <div className="btn-section">
          
            {" "}
           <div className="radiosec" >
              <input
                type="radio"
                id="Daily"
                name="frequency"
                value="Daily"
                className="custom-radio"
                checked={selectedFrequency === "Daily"}
                onChange={(e)=>handleFrequencyChange(e.target.value)}
                onClick={()=>{navigate("/cast/schedulecasting");hideschedulecasting()}}
              />
              <label htmlFor="Daily">Daily</label>
            </div>
          <div className="radiosec">
            <input
              type="radio"
              id="weekdays"
              name="frequency"
              value="weekdays"
              checked={selectedFrequency === "weekdays"}
              onChange={(e)=>handleFrequencyChange(e.target.value)}
              onClick={()=>{navigate("/cast/schedulecasting");hideschedulecasting()}}
            />
            <label htmlFor="weekdays">Weekdays (Mon-Fri)</label>
          </div>

          <div className="radiosec">
            {" "}
            <input
              type="radio"
              id="weekends"
              name="frequency"
              value="weekends"
              checked={selectedFrequency === "weekends"}
              onChange={(e)=>handleFrequencyChange(e.target.value)}
              onClick={()=>{navigate("/cast/schedulecasting");hideschedulecasting()}}
            />
            <label htmlFor="weekends">Weekends (Sat-Sun)</label>
          </div>

         <div className="radiosec">
            {" "}
             <input
              type="radio"
              id="custom"
              name="frequency"
              value="custom"
              checked={selectedFrequency === "custom"}
              onChange={(e)=>handleFrequencyChange(e.target.value)} 
              onClick={()=>{navigate("/cast/schedulecasting");hideschedulecasting()}}
            />
            <label htmlFor="custom">Custom</label>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Casting;
