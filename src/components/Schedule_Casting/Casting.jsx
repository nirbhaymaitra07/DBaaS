import React, { useState } from "react";
import arrow from "./images/ArrowLeft1.svg";
import "./casting.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import ScheduleCasting from "./ScheduleCasting";
function Casting() {
    const [selectedFrequency, setSelectedFrequency] = useState("");

    const handleFrequencyChange = (event) => {
      setSelectedFrequency(event.target.value);
    };
  return (
    <div className="casting-container">
      <div className="title-section">
        <div>
          <img src={arrow} alt="arrow" className="leftarrow" />
        </div>
        <h2>Schedule casting</h2>
      </div>
      <div className="cast-section">
        <div className="btn-section">
          <div className="radiosec">
            <input type="radio" id="daily" name="frequency" value="daily"  className="custom-radio"
            checked={selectedFrequency === "daily"}
            onChange={handleFrequencyChange} />
            <label htmlFor="daily">Daily</label>
            {/* <Link to="/ScheduleCasting">Daily</Link> */}
          </div>
          <div className="radiosec">
            <input
              type="radio"
              id="weekdays"
              name="frequency"
              value="weekdays"
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
            />
            <label htmlFor="weekends">Weekends (Sat-Sun)</label>
          </div>

          <div className="radiosec">
            {" "}
            <input type="radio" id="custom" name="frequency" value="custom" />
            <label htmlFor="custom">Custom</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Casting;
